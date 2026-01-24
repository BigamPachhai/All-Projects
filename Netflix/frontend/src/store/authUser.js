import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isSigningUp: false,
  isCheckingAuth: true,
  isLoggingOut: false,
  isLoggingIn: false,
  signup: async (credentials) => {
    set({ isSigningUp: true });
    try {
      console.log("Signup request data:", credentials);
      const response = await axios.post("/api/v1/auth/signup", credentials);
      set({ user: response.data.user, isSigningUp: false });
      toast.success("Account created successfully");
    } catch (error) {
      console.error("Signup error:", error);
      const errorMsg =
        error.response?.data?.message || "Signup failed. Please try again.";
      toast.error(errorMsg);
      set({ isSigningUp: false, user: null });
    }
  },
  login: async (credentials) => {
    set({ isLoggingIn: true });
    try {
      console.log("Login request data:", credentials);
      const response = await axios.post("/api/v1/auth/login", credentials);
      set({ user: response.data.user, isLoggingIn: false });
    } catch (error) {
      console.error("Login error:", error);
      const errorMsg =
        error.response?.data?.message || "Login failed. Please try again.";
      set({ isLoggingIn: false, user: null });
      toast.error(errorMsg);
    }
  },
  logout: async () => {
    set({ isLoggingOut: true });
    try {
      await axios.post("/api/v1/auth/logout");
      set({ user: null, isLoggingOut: false });
      toast.success("Logged out successfully");
    } catch (error) {
      set({ isLoggingOut: false });
      toast.error(error.response.data.message || "Logout failed");
    }
  },
  authCheck: async () => {
    set({ isCheckingAuth: true });
    try {
      console.log("Checking authentication status...");
      const response = await axios.get("/api/v1/auth/authCheck");
      console.log("Auth check response:", response.data);
      set({ user: response.data.user, isCheckingAuth: false });
    } catch (error) {
      console.log(
        "Auth check failed:",
        error.response?.status,
        error.response?.data?.message || error.message
      );
      set({ isCheckingAuth: false, user: null });
    }
  },
}));
