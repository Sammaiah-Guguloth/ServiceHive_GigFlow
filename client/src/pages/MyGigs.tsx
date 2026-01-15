import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { AppDispatch, RootState } from "../redux/store";
import { getMyGigsThunk } from "../redux/thunks/gig.thunk";

const MyGigs = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { myGigs, loading, error } = useSelector(
    (state: RootState) => state.gig
  );

  useEffect(() => {
    dispatch(getMyGigsThunk()); 
  }, [dispatch]);

  // Animation Variants for a professional cascade effect
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-[#050505]">
        <div className="w-8 h-8 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">Fetching...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20 bg-[#050505]">
        <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl text-center">
          <p className="text-sm font-bold text-red-500 uppercase tracking-tighter">Sever Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            
            <h1 className="text-4xl font-black uppercase tracking-tighter">
              My Posted <span className="text-emerald-500 italic">Gigs</span> 
            </h1>
          </div>
          <Link 
            to="/post-gig" 
            className="text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 border border-white/10 rounded-lg hover:bg-white/5 transition-all"
          >
            +  Post New Gig 
          </Link>
        </div>

        {myGigs.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center border border-dashed border-white/5 rounded-3xl"
          >
            <p className="text-gray-600 font-mono text-xs uppercase tracking-widest">
               Empty: No Gigs Detected 
            </p>
          </motion.div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            {myGigs.map((gig) => (
              <motion.div
                key={gig._id} 
                variants={itemVariants}
                whileHover={{ scale: 1.01, borderColor: "rgba(16, 185, 129, 0.3)" }}
                className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/10 p-8 rounded-2xl transition-all duration-300 flex flex-col md:flex-row justify-between items-center gap-6"
              >
                {/* Visual Status Indicator Blob */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${
                  gig.status === 'open' ? 'bg-emerald-500/50' : 'bg-blue-500/50'
                }`} />

                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {gig.title} 
                    </h3>
                    <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${
                      gig.status === 'open' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'
                    }`}>
                      {gig.status} 
                    </span>
                  </div>
                  <div className="flex items-center gap-6 text-[11px] font-mono text-gray-500 uppercase tracking-widest">
                    <span>ID: {gig._id.slice(-8)}</span>
                    <span className="text-gray-700">|</span>
                    <span className="text-white/70 italic">Budget: ₹{gig.budget.toLocaleString()} </span>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full md:w-auto">
                  <Link
                    to={`/gigs/${gig._id}/bids`}
                    className="relative group/btn w-full md:w-auto px-8 py-3 bg-emerald-500 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    <span className="relative text-[10px] font-black text-black uppercase tracking-[0.2em]">
                      Review Bids 
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MyGigs;