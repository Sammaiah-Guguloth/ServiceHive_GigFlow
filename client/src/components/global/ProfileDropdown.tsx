import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { logoutUserThunk } from "../../redux/thunks/auth.thunk";

const ProfileDropdown = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { user, loading } = useSelector(
    (state: RootState) => state.auth
  );

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUserThunk()).unwrap();
      setOpen(false);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Trigger Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 pl-1.5 pr-4 py-1.5 transition-all hover:bg-white/10 hover:border-emerald-500/30 group"
      >
        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-blue-600 text-[11px] font-black text-white shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:shadow-emerald-500/40 transition-all">
          {user?.name.charAt(0).toUpperCase()}
        </div>
        <div className="hidden md:flex flex-col items-start leading-tight">
        
        </div>
      </button>

      {/* Glassmorphic Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-3 w-56 rounded-xl border border-white/10 bg-black/90 backdrop-blur-2xl shadow-2xl overflow-hidden z-[110]">
          <div className="p-4 border-b border-white/5 bg-white/[0.02]">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-1 text-center">Account </p>
            <p className="text-lg font-bold text-white truncate">{user?.name}</p>
            <p className="text-sm font-medium text-white truncate text-gray-600">{user?.email}</p>
           

          </div>
          
          <ul className="py-2 text-[11px] font-bold uppercase tracking-widest">
            <li>
              <Link
                to="/post-gig"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all"
              >
                <span>Post a Gig</span>
                <span className="text-[9px] opacity-40 font-mono">[01]</span>
              </Link>
            </li>
            <li>
              <Link
                to="/gigs"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all"
              >
                <span>Browse Gigs</span>
                <span className="text-[9px] opacity-40 font-mono">[02]</span>
              </Link>
            </li>
            <li>
              <Link
                to="/my-gigs"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all"
              >
                <span>Posted Gigs</span>
                <span className="text-[9px] opacity-40 font-mono">[03]</span>
              </Link>
            </li>
            <li className="mt-2 border-t border-white/5 pt-2">
              <button
                onClick={handleLogout}
                disabled={loading}
                className="w-full flex items-center justify-between px-4 py-4 text-red-500 hover:bg-red-500/5 transition-all disabled:opacity-50"
              >
                <span>Logout</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 16l4-4m0 0l-4-4m4 4H7" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;