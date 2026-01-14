import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Gig {
  _id: string;
  title: string;
  description: string;
  budget: number;
}

interface Props {
  gig: Gig;
  onClose: () => void;
  onBid: () => void;
}

const ViewGigModal = ({ gig, onClose, onBid }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  // Outside click logic preserved for UX integrity
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
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
        {/* Background Accent Blob - ZBS Capital Aesthetic */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.3em]">
                Gig Details
              </span>
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">
              {gig.title}
            </h2>
          </div>

          {/* Body Section */}
          <div className="space-y-6 mb-10">
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                Project Description 
              </p>
              <p className="text-gray-400 text-sm leading-relaxed italic border-l-2 border-white/10 pl-6">
                "{gig.description}"
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 flex items-center justify-between">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Budget
              </span>
              <span className="text-2xl font-black text-white font-mono">
                ₹{gig.budget.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-6 pt-6 border-t border-white/5">
            <button
              onClick={onClose}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors cursor-pointer"
            >
              Close Panel
            </button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBid}
              className="relative group px-8 py-4 bg-emerald-500 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative text-[10px] font-black text-black uppercase tracking-[0.2em] cursor-pointer">
                Bid 
              </span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewGigModal;