import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  onClose: () => void;
  onHire: () => void;
}

const ViewBidModal = ({ bid, onClose, onHire }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  // Preserve outside click logic for UX integrity
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl max-w-xl w-full p-10 shadow-2xl overflow-hidden"
      >
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          {/* Header: Talent Identification */}
          <div className="mb-8 border-b border-white/5 pb-6">
           
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter">
              Proposal from <span className="text-emerald-400">{bid.freelancerId.name}</span>
            </h3>
            <p className="text-gray-600 text-[10px] font-mono mt-1 uppercase tracking-widest italic">
             BID ID: {bid._id.slice(-12)}
            </p>
          </div>

          {/* Body: Proposal Details */}
          <div className="space-y-8 mb-10">
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Message</p>
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 italic text-gray-400 text-sm leading-relaxed">
                "{bid.message}"
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5">
                <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest block mb-1">Requested Rate</span>
                <span className="text-xl font-black text-white font-mono">₹{bid.price.toLocaleString()}</span>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5">
                <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest block mb-1">Email</span>
                <span className="text-[11px] font-medium text-gray-400 truncate block">{bid.freelancerId.email}</span>
              </div>
            </div>
          </div>

          {/* Footer: Selection Protocol */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-6 pt-6 border-t border-white/5">
            <button
              onClick={onClose}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors cursor-pointer"
            >
              Back to Bids
            </button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onHire}
              className="relative group px-10 py-4 bg-emerald-500 rounded-xl overflow-hidden shadow-[0_0_25px_rgba(16,185,129,0.25)] cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative text-[10px] font-black text-black uppercase tracking-[0.3em] cursor-pointer">
                 Hire 
              </span>
            </motion.button>
          </div>
        </div>

        
      </motion.div>
    </div>
  );
};

export default ViewBidModal;