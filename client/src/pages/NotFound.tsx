import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] flex items-center justify-center px-6 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-center"
      >
        {/* Animated Error Code */}
        <motion.h1 
          animate={{ 
            textShadow: [
              "0 0 0px rgba(16,185,129,0)",
              "0 0 20px rgba(16,185,129,0.3)",
              "0 0 0px rgba(16,185,129,0)"
            ] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[150px] md:text-[220px] font-black leading-none tracking-tighter text-white/5 select-none"
        >
          404
        </motion.h1>

        {/* Technical Error Details */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/5 px-4 py-1.5 mb-2">
             
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">
                The page you are looking doesn't exist or has been removed 
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Page {"  "}<span className="text-emerald-500 italic">Not Found</span>
            </h2>
            
            
          </motion.div>

          {/* Action Button - Bracket Style */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <Link
              to="/"
              className="relative group inline-flex items-center justify-center px-10 py-4 bg-transparent border border-white/10 rounded-xl transition-all hover:border-emerald-500/50 hover:bg-emerald-500/5"
            >
              <span className="text-white font-bold tracking-[0.2em] uppercase text-[10px] group-hover:text-emerald-400">
                Return to HOME
              </span>
            </Link>
          </motion.div>
        </div>

        
      </motion.div>
    </div>
  );
};

export default NotFound;