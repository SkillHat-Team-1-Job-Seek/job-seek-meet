import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export const AuthGuard = ({ children, requiredAuth = true }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (requiredAuth && !user) {
    return <Navigate to="/login" />;
  }

  // Logged in but not verified, redirect to verify-email
  if (user && user.isVerified === "false") {
    return <Navigate to="/verify" state={{ email: user.email }} />;
  }
  if (
    user &&
    user.isVerified === "true" &&
    user.isProfileComplete === "false"
  ) {
    return <Navigate to="/createProfile" />;
  }

  return children;
};
