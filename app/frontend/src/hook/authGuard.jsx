import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";

const AuthGuard = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-8 w-8 border-4 border-teal-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  // Not authenticated
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Not verified
  if (user.isVerified === "false") {
    return <Navigate to="/verify" state={{ email: user.email }} replace />;
  }

  // Not completed profile
  if (user.isProfileComplete === "false") {
    console.log("Profile not complete, redirecting to create profile");
    return <Navigate to="/createProfile" replace />;
  }

  // All checks passed
  return children;
};

export default AuthGuard;
