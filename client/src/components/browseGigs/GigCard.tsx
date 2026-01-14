import { motion } from "framer-motion";

interface Gig {
  _id: string;
  title: string;
  description: string;
  budget: number;
}

interface Props {
  gig: Gig;
  onView: (gig: Gig) => void;
}

const GigCard = ({ gig, onView }: Props) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, borderColor: "rgba(16, 185, 129, 0.3)" }}
      className="group relative bg-[#0A0A0A] border border-white/10 p-8 rounded-2xl transition-all duration-300 shadow-2xl"
    >
      {/* Subtle Glow Effect on Hover */}
      <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity pointer-events-none" />

      <div className="relative flex flex-col h-full">
        {/* Top Section: Title & Status Badge */}
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
            {gig.title}
          </h3>
          <span className="text-[9px] font-mono font-bold text-emerald-500 border border-emerald-500/30 px-2 py-0.5 rounded uppercase tracking-[0.2em] bg-emerald-500/5">
            Status: Open
          </span>
        </div>

        {/* Middle Section: Truncated Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-10 min-h-[60px]">
          {gig.description.length > 100
            ? gig.description.slice(0, 100) + "..."
            : gig.description}
        </p>

        {/* Bottom Section: Budget & Action */}
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.2em] text-gray-600 font-black mb-1">
              Budget
            </span>
            <span className="text-white font-mono font-bold text-lg">
              ₹{gig.budget.toLocaleString()}
            </span>
          </div>

          <motion.button
            whileHover={{ x: 3 }}
            type="button"
            onClick={() => onView(gig)}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 hover:text-emerald-300 transition-all group/btn"
          >
            Details 
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default GigCard;