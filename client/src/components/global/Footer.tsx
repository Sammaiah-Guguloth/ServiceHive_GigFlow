import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">GigFlow</h2>
          <p className="mt-3 text-sm text-gray-600 max-w-xs">
            A simple platform to post gigs, receive bids, and hire freelancers
            instantly.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>
              <Link to="/gigs" className="hover:text-blue-600">
                Browse Gigs
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-600">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-blue-600">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase">
            Project
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Built as a full-stack assignment demonstrating authentication,
            real-time updates, and scalable backend design.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} GigFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
