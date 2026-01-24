import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/client";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
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
      const res = await api.post("/api/auth/register", form);
      login(res.data.token, res.data.user);
      navigate("/feed");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Registration failed, please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto flex max-w-md flex-col gap-4 px-3 py-6">
      <div className="rounded-3xl border border-amber-100 bg-white/90 p-5 shadow-md shadow-amber-100">
        <h1 className="text-lg font-semibold text-slate-900">
          Create an account
        </h1>
        <p className="mt-1 text-xs text-slate-600">
          नागरिकको रूपमा उजुरी गर्न खाता आवश्यक छ।
        </p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="text-xs font-medium text-slate-700">
              Full name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border border-amber-200 bg-amber-50/40 px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
            />
          </div>
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
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>
        <p className="mt-4 text-center text-[11px] text-slate-500">
          Already have an account?{" "}
          <Link to="/login" className="text-rose-700 underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
