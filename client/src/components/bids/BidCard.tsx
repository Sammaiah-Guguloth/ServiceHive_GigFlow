import { motion } from "framer-motion";

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
  bid: Bid;
  onView: (bid: Bid) => void;
}

const BidCard = ({ bid, onView }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.01, borderColor: "rgba(16, 185, 129, 0.3)" }}
      className="group relative bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl transition-all duration-300 flex justify-between items-center overflow-hidden"
    >
      {/* Visual Indicator: Signaling a 'Pending' proposal state */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500/20 group-hover:bg-emerald-500/50 transition-colors" />

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
            {bid.freelancerId.name}
          </h4>
          
        </div>
        
        <div className="flex items-center gap-4 mt-1">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-widest text-gray-500 font-black">
              Proposed Rate
            </span>
            <span className="text-white font-mono font-bold text-md">
              ₹{bid.price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={() => onView(bid)}
          className="relative group/btn overflow-hidden px-6 py-2.5 rounded-lg border border-white/10 transition-all hover:border-emerald-500/50"
        >
          {/* Subtle background slide-up effect */}
          <div className="absolute inset-0 bg-emerald-500/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
          <span className="relative text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">
            View Proposal
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default BidCard;