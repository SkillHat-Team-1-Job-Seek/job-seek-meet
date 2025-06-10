import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getCurrentUser = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/users/me`, {
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Refreshed user data:", data);
        if (data.success && data.payload) {
          setUser(data.payload);
          setIsAuthenticated(true);
          return data.payload;
        } else {
          console.warn("User data structure not as expected:", data);
          return null;
        }
      } else {
        console.warn("Failed to refresh user data, status:", response.status);
        return null;
      }
    } catch (error) {
      console.error("Error refreshing user data:", error);
      return null;
    }
  };

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        await getCurrentUser();
      } catch (error) {
        console.error("Error checking authentication status:", error);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Login: sends credentials and sets cookies on successful login
  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
        // After successful login, get the complete user profile
        const userData = await getCurrentUser();

        return {
          success: true,
          message: data.message,
          user: userData, // Include full user data
        };
      } else {
        return { success: false, error: data.message || "Login failed" };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Signup function
  const signup = async (userData) => {
    try {
      console.log("About to send signup request with:", userData);
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include",
      });

      const data = await response.json();
      console.log("Signup response:", data);

      if (response.ok && data.status === "success") {
        toast({
          title: "Success",
          description: data.message || "Registration successful",
          variant: "success",
        });
        return {
          success: true,
          email: userData.email,
        };
      } else if (data.message === "User already exists") {
        toast({
          title: "Account exists",
          description:
            "This email is already registered. Please verify your account.",
          variant: "info",
        });
        return {
          success: false,
          error: data.message,
          emailExists: true,
          email: userData.email,
        };
      } else {
        toast.error(data.message || "Registration failed");
        return { success: false, error: data.message };
      }
    } catch (error) {
      toast.error("An error occurred during registration");
      return { success: false, error: error.message };
    }
  };

  // Logout: clears the auth cookie
  const logout = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Logged out successfully");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Error logging out");
    } finally {
      // Always reset state even if API call fails
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const value = {
    user,
    isAuthenticated,
    login,
    signup,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
