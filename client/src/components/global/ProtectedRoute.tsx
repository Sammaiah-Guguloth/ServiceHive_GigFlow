import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

interface Props {
  redirectTo?: string;
}

const ProtectedRoute = ({ redirectTo = "/login" }: Props) => {
  const { isAuthenticated, loading } = useSelector(
    (state: RootState) => state.auth
  );

  // ⏳ Wait until auth check completes
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-600">Checking authentication...</p>
      </div>
    );
  }

  // 🔒 Not authenticated → redirect
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  // ✅ Authenticated → render protected content
  return <Outlet />;
};

export default ProtectedRoute;
