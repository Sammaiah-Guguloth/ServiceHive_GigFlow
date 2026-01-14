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

  // Close on outside click
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
    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
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
      {/* Profile button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        <span className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
          {user?.name.charAt(0).toUpperCase()}
        </span>
        <span className="hidden md:block">{user?.name}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-md border bg-white shadow-lg">
          <ul className="py-1 text-sm text-gray-700">
            <li>
              <Link
                to="/post-gig"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Post a Gig
              </Link>
            </li>
            <li>
              <Link
                to="/gigs"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Browse Gigs
              </Link>
            </li>
            <li>
              <Link
                to="/my-gigs"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                My Posted Gigs
              </Link>
            </li>
            <li className="border-t">
              <button
                onClick={handleLogout}
                disabled={loading}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 disabled:opacity-50"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
