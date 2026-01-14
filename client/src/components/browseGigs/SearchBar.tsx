import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

const SearchBar = ({ value, onChange, onSearch }: Props) => {
  return (
    <div className="relative group max-w-2xl mx-auto mb-12">
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
      <div className="relative flex items-center gap-3 bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-2">
        <FiSearch className="text-emerald-500 text-lg ml-2" />
        <input
          type="text"
          placeholder="Search by Gig Title..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
          className="w-full bg-transparent border-none outline-none text-white placeholder:text-gray-600 text-sm py-2"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSearch}
          className="bg-emerald-500 text-black px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors"
        >
          Search
        </motion.button>
      </div>
    </div>
  );
};

export default SearchBar;