import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

interface Props {
  redirectTo?: string;
  children: React.ReactNode;
}

const ProtectedRoute = ({ redirectTo = "/login", children }: Props) => {
  const { isAuthenticated, loading } = useSelector(
    (state: RootState) => state.auth
  );

  // ⏳ WAIT until auth check finishes
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-600">Checking authentication...</p>
      </div>
    );
  }

  // 🚫 Not authenticated
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  // ✅ Authenticated
  return <>{children}</>;
};

export default ProtectedRoute;
