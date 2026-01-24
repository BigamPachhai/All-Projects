import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/client";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await api.post("/api/auth/login", form);
      login(res.data.token, res.data.user);
      navigate("/feed");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed, please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    /* Use Google Identity Services */
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    if (!window.google || !clientId) {
      alert("Google login not configured.");
      return;
    }
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: async (response) => {
        try {
          const res = await api.post("/api/auth/google", {
            credential: response.credential
          });
          login(res.data.token, res.data.user);
          navigate("/feed");
        } catch (err) {
          console.error(err);
          alert("Google login failed");
        }
      }
    });
    window.google.accounts.id.prompt(); // One-tap
  };

  return (
    <main className="mx-auto flex max-w-md flex-col gap-4 px-3 py-6">
      <div className="rounded-3xl border border-amber-100 bg-white/90 p-5 shadow-md shadow-amber-100">
        <h1 className="text-lg font-semibold text-slate-900">Login</h1>
        <p className="mt-1 text-xs text-slate-600">
          आफ्नो इमेल वा Google खाता प्रयोग गरेर लगइन गर्नुहोस्।
        </p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="text-xs font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border border-amber-200 bg-amber-50/40 px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border border-amber-200 bg-amber-50/40 px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
            />
          </div>
          {error && (
            <div className="rounded-xl bg-rose-50 px-3 py-2 text-xs text-rose-700">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-full bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-rose-700 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <button
          type="button"
          onClick={handleGoogle}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50"
        >
          <span>🔐</span> Continue with Google
        </button>
        <p className="mt-4 text-center text-[11px] text-slate-500">
          New here?{" "}
          <Link to="/register" className="text-rose-700 underline">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
