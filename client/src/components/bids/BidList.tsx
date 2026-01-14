import { motion, AnimatePresence } from "framer-motion";
import BidCard from "./BidCard";

interface Bid {
  _id: string;
  message: string;
  price: number;
  freelancerId: {
    name: string;
    email: string;
  };
}

interface Props {
  bids: Bid[];
  onView: (bid: Bid) => void;
}

const BidList = ({ bids, onView }: Props) => {
  // Stagger variants for an elite "System Loading" experience
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Each bid slides in with a slight delay
      },
    },
  };

  // Professional Empty State: Mimics a "Protocol Scanning" result
  if (bids.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-10 py-20 text-center border border-dashed border-white/10 rounded-3xl bg-white/[0.01]"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
             <div className="w-16 h-16 bg-emerald-500/5 rounded-full flex items-center justify-center border border-emerald-500/20">
               <span className="text-emerald-500 text-2xl font-mono animate-pulse">?</span>
             </div>
             <div className="absolute -inset-2 bg-emerald-500/10 blur-xl rounded-full opacity-50" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-white font-black uppercase tracking-[0.3em] text-xs">Registry Status: Idle</h3>
            <p className="text-gray-500 text-[11px] font-mono uppercase tracking-widest max-w-xs mx-auto leading-relaxed">
              No freelancer proposals have been logged for this gig yet.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="space-y-4 mt-8"
    >
      <AnimatePresence mode="popLayout">
        {bids.map((bid) => (
          <motion.div
            key={bid._id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <BidCard bid={bid} onView={onView} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default BidList;