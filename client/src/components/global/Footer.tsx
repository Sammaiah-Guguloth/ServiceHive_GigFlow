import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-gray-500 py-16 border-t border-white/5 ">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* About the Platform */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-xs">About GigFlow</h3>
          <p className="text-sm leading-relaxed">
            A high-performance marketplace platform designed for posting gigs, 
            managing bids, and hiring.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-xs">Quick Links</h3>
          <nav className="flex flex-col gap-4 text-sm font-medium">
            <Link to="/gigs" className="hover:text-emerald-400 transition-colors">Browse Gigs</Link>
            <Link to="/login" className="hover:text-emerald-400 transition-colors">Login</Link>
            <Link to="/register" className="hover:text-emerald-400 transition-colors">Join ?</Link>
          </nav>
        </div>

        {/* Assignment Submission Info */}
        <div className="md:text-right">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-widest text-gray-600 font-bold">Assignment Submitted by:</p>
            <p className="text-lg font-bold text-white tracking-tight italic">
              Sammaiah Guguloth
            </p>
            <p className="text-[10px] font-mono text-emerald-500/80">Full-Stack Dev Assignment </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] font-medium text-gray-700">
          © {new Date().getFullYear()} GigFlow
        </p>
      </div>
    </footer>
  );
};

export default Footer;