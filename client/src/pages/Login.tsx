import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { AppDispatch, RootState } from "../redux/store";
import { loginUserThunk } from "../redux/thunks/auth.thunk";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(
        loginUserThunk({ email, password })
      ).unwrap();
      navigate("/gigs"); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#050505] px-4 overflow-hidden">
      
      {/* Background Ambience - Matching ZBS Visuals */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-md"
      >
        {/* Glassmorphic Card */}
        <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 p-10 shadow-2xl">
          
          <div className="text-center mb-10">
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="inline-block w-12 h-12 bg-emerald-500 rounded-lg rotate-45 mb-6 mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            />
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
              Login
            </h2>
            <p className="text-gray-500 text-xs font-mono mt-2 uppercase tracking-[0.2em]">
              Welcome Back to GigFlow. 
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input Group: Email */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 transition-all"
              />
            </div>

            {/* Input Group: Password */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 transition-all"
              />
            </div>

            {error && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[11px] font-bold text-red-500 uppercase tracking-tighter text-center"
              >
                Verification Failed: {error}
              </motion.p>
            )}

            {/* Submit Button - Bracket Style */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full group py-4 bg-emerald-500 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.2)] disabled:opacity-50"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative text-xs font-black text-black uppercase tracking-[0.2em]">
                {loading ? "Authenticating..." : "Login"}
              </span>
            </motion.button>
          </form>

          {/* Footer Link */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 font-medium">
              Don't Have an Account?{" "}
              <Link to="/register" className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors ml-1">
                Register
              </Link>
            </p>
          </div>
        </div>

        {/* Technical Footer - Referring to PDF spec */}
        <div className="mt-8 text-center opacity-30">
          <p className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.4em]">
            AES-256 Bit Encryption • JWT Auth Active
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;