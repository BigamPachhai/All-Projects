import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  const linkClass = ({ isActive }) =>
    [
      "text-sm px-3 py-1 rounded-full transition-colors",
      isActive
        ? "bg-amber-200 text-rose-900"
        : "text-slate-700 hover:bg-amber-100"
    ].join(" ");

  return (
    <header className="sticky top-0 z-40 border-b border-amber-100/70 bg-amber-50/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-600 via-amber-500 to-emerald-600 text-xs font-bold text-white shadow-md shadow-rose-300/40">
            RS
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">
              Rupandehi Samasya Portal
            </div>
            <div className="text-[11px] text-slate-500">
              रुपन्देही समस्या पोर्टल
            </div>
          </div>
        </Link>
        <nav className="flex items-center gap-2 text-xs md:text-sm">
          <NavLink to="/feed" className={linkClass}>
            सार्वजनिक बोर्ड
          </NavLink>
          <NavLink to="/report" className={linkClass}>
            समस्या रिपोर्ट
          </NavLink>
          <NavLink to="/leaderboard" className={linkClass}>
            Leaderboard
          </NavLink>
          <NavLink to="/analytics" className={linkClass}>
            आँकडा
          </NavLink>
          {user?.role === "admin" && (
            <NavLink to="/admin" className={linkClass}>
              Admin
            </NavLink>
          )}
          {user ? (
            <>
              <span className="hidden items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs text-emerald-700 md:flex">
                <span className="h-5 w-5 rounded-full bg-emerald-600/80 text-[10px] font-semibold text-white flex items-center justify-center">
                  {user.name?.[0] || "U"}
                </span>
                {user.name?.split(" ")[0]}
              </span>
              <button
                onClick={logout}
                className="rounded-full border border-rose-300 px-3 py-1 text-xs font-medium text-rose-700 hover:bg-rose-50"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={linkClass}>
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold text-white shadow-sm hover:bg-rose-700"
              >
                Create account
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
