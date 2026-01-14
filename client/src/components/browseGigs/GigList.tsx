import { motion, AnimatePresence } from "framer-motion";
import GigCard from "./GigCard";

interface Gig {
  _id: string;
  title: string;
  description: string;
  budget: number;
}

interface Props {
  gigs: Gig[];
  onView: (gig: Gig) => void;
}

const GigList = ({ gigs, onView }: Props) => {
  // Sophisticated stagger variants to signal high-end React expertise 
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Subtle delay for each registry entry
      },
    },
  };

  // Fallback state
  if (gigs.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-20 py-28 text-center border border-dashed border-white/10 rounded-3xl bg-white/[0.01]"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
             <div className="w-16 h-16 bg-emerald-500/5 rounded-full flex items-center justify-center border border-emerald-500/20">
               <span className="text-emerald-500 text-2xl font-mono animate-pulse">!</span>
             </div>
             <div className="absolute -inset-1 bg-emerald-500/20 blur-xl rounded-full opacity-50" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-white font-black uppercase tracking-[0.3em] text-xs">Empty</h3>
            <p className="text-gray-500 text-[11px] font-mono uppercase tracking-widest max-w-xs mx-auto leading-relaxed">
              No active gigs found with the QUERY
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
      // Responsive grid layout for the "Open" jobs feed 
      className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <AnimatePresence mode="popLayout">
        {gigs.map((gig) => (
          <GigCard 
            key={gig._id} 
            gig={gig} 
            onView={onView} 
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default GigList;