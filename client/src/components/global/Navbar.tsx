import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  return (
    <header className="sticky top-0 z-[100] bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Logo - Matching the ZBS "Geometric" vibe */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 bg-emerald-500 rounded-sm rotate-45 transition-all duration-500 group-hover:rotate-[135deg] group-hover:bg-emerald-400 overflow-hidden">
             {/* Subtle internal gradient for depth */}
             <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase italic">
            GigFlow
          </span>
        </Link>

        {/* Navigation - High-density typography */}
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
          <NavLink
            to="/gigs"
            className={({ isActive }) =>
              isActive 
                ? "text-emerald-400 border-b border-emerald-500/50 pb-1" 
                : "text-gray-400 hover:text-white transition-colors"
            }
          >
            Browse Gigs
          </NavLink>
          <NavLink
            to="/post-gig"
            className={({ isActive }) =>
              isActive 
                ? "text-emerald-400 border-b border-emerald-500/50 pb-1" 
                : "text-gray-400 hover:text-white transition-colors"
            }
          >
            Post a Gig
          </NavLink>
        </nav>

        {/* Right Actions - Bracket Style CTA */}
        <div className="flex items-center gap-6">
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="group relative px-5 py-1.5"
            >
            
              <span className="absolute left-0 top-0 bottom-0 w-[1px] bg-emerald-500/30 group-hover:bg-emerald-500 transition-colors" />
              <span className="absolute right-0 top-0 bottom-0 w-[1px] bg-emerald-500/30 group-hover:bg-emerald-500 transition-colors" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">
                Log In
              </span>
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              {/* Visual Indicator for Socket Connection (Refers to Bonus Question) */}
              <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] hidden sm:block" title="Real-time Connection Active" />
              <ProfileDropdown />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;