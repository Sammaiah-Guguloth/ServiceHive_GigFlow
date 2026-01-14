import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { AppDispatch } from "../redux/store";
import { postGigThunk } from "../redux/thunks/gig.thunk";

const PostGig = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);
      // Fulfilling Section 3.B: Job Posting logic
      await dispatch(
        postGigThunk({
          title: formData.title,
          description: formData.description,
          budget: Number(formData.budget),
        })
      ).unwrap();

      navigate("/my-gigs");
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Ambience Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-2xl"
      >
        {/* Glassmorphic Container */}
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl">
          
          {/* Header Section */}
          <div className="mb-12 border-b border-white/5 pb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                <span className="text-black font-black text-xl -rotate-45">+</span>
              </div>
              <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
                Post a  <span className="text-emerald-500 italic">Gig </span>
              </h1>
            </div>
            
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="e.g., Full Stack Developer for AI Project"
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-emerald-500/50 transition-all"
              />
            </div>

            {/* Description Textarea */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">
                Description 
              </label>
              <textarea
                name="description"
                required
                rows={5}
                placeholder="Describe the requirements, tech stack, and goals..."
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
              />
            </div>

            {/* Budget Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">
                Budget (₹)
              </label>
              <input
                type="number"
                name="budget"
                required
                placeholder="0.00"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-4 text-sm text-white font-mono placeholder:text-gray-700 focus:outline-none focus:border-emerald-500/50 transition-all"
              />
            </div>

            {error && (
              <p className="text-xs font-bold text-red-500 uppercase tracking-tighter text-center italic">
                {error}
              </p>
            )}

            {/* Submit Button - Dynamic Labeling */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="relative w-full group py-5 bg-emerald-500 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.2)] disabled:opacity-50"
            >
              <div className="absolute cursor-pointer inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative cursor-pointer text-xs font-black text-black uppercase tracking-[0.3em]">
                {loading ? "Initializing..." : "Publish"}
              </span>
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default PostGig;