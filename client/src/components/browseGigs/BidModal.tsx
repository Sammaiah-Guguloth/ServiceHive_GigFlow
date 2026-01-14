import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onClose: () => void;
  onSubmit: (data: { message: string; price: number }) => void;
}

const BidModal = ({ onClose, onSubmit }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [onClose]);

  const handleSubmit = () => {
    if (!message.trim() || !price) return;
    onSubmit({ message, price: Number(price) });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        ref={ref}
        className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl max-w-md w-full p-8 shadow-2xl overflow-hidden"
      >
        {/* Background Glow Effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative text-center mb-8">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg rotate-45 mb-6 mx-auto shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center justify-center">
            <span className="text-black font-black text-xs -rotate-45">+</span>
          </div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
            Bidding Proposal
          </h3>
          
        </div>

        <div className="space-y-6">
          {/* Proposal Message Field */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
              Message to the Project Owner
            </label>
            <textarea
              placeholder="Describe your approach to this project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
              rows={4}
            />
          </div>

          {/* Price Input Field */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
              Budget Request (₹)
            </label>
            <input
              type="number"
              min={0}
              placeholder="0.00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 transition-all font-mono"
            />
          </div>

          {/* Action Footer */}
          <div className="flex flex-col gap-3 pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleSubmit}
              className="relative group w-full py-4 bg-emerald-500 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative text-xs font-black text-black uppercase tracking-[0.2em]">
                Confirm Bid
              </span>
            </motion.button>
            
            <button
              type="button"
              onClick={onClose}
              className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors py-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BidModal;