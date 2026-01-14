import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          GigFlow
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <NavLink
            to="/gigs"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Browse Gigs
          </NavLink>
        </nav>

        {/* Right Actions */}
        {!isAuthenticated ? (
          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Login
          </Link>
        ) : (
          <ProfileDropdown />
        )}
      </div>
    </header>
  );
};

export default Navbar;
