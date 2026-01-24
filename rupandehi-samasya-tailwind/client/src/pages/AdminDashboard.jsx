import React, { useEffect, useState } from "react";
import api from "../api/client";
import { useAuth } from "../context/AuthContext";

const AdminDashboard = () => {
  const { user } = useAuth();
  const [issues, setIssues] = useState([]);
  const [filter, setFilter] = useState({ category: "", status: "" });

  const load = async () => {
    const params = new URLSearchParams();
    if (filter.category) params.set("category", filter.category);
    if (filter.status) params.set("status", filter.status);
    const res = await api.get(`/api/admin/issues?${params.toString()}`);
    setIssues(res.data);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.category, filter.status]);

  const updateStatus = async (id, status) => {
    const resolutionNotes =
      status === "resolved"
        ? prompt("Resolution notes (optional, Nepali/English):") || ""
        : "";
    await api.put(`/api/admin/issues/${id}/status`, {
      status,
      resolutionNotes
    });
    load();
  };

  const downloadPdf = async (id) => {
    const res = await api.get(`/api/admin/issues/${id}/report.pdf`, {
      responseType: "blob"
    });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const a = document.createElement("a");
    a.href = url;
    a.download = `issue-${id}.pdf`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (!user || user.role !== "admin") {
    return (
      <main className="mx-auto max-w-xl px-3 py-6">
        <div className="rounded-2xl border border-rose-200 bg-rose-50/80 p-5 text-sm text-rose-800">
          यो भाग सरकारी/प्रशासनिक प्रयोगका लागि मात्र हो (Admin login
          आवश्यक)।
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-3 py-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-amber-100 bg-white/90 p-3 text-xs">
        <div className="font-semibold text-slate-900">
          Admin dashboard (Rupandehi)
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={filter.category}
            onChange={(e) =>
              setFilter((f) => ({ ...f, category: e.target.value }))
            }
            className="rounded-full border border-amber-200 bg-amber-50/70 px-2 py-1 text-[11px] text-slate-700"
          >
            <option value="">All categories</option>
            <option value="waste">Waste</option>
            <option value="water">Water</option>
            <option value="electrical">Electrical</option>
            <option value="road">Road</option>
            <option value="other">Other</option>
          </select>
          <select
            value={filter.status}
            onChange={(e) =>
              setFilter((f) => ({ ...f, status: e.target.value }))
            }
            className="rounded-full border border-amber-200 bg-amber-50/70 px-2 py-1 text-[11px] text-slate-700"
          >
            <option value="">All status</option>
            <option value="pending">Pending</option>
            <option value="in_progress">In progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-amber-100 bg-white/95 p-3 text-xs shadow">
        <table className="min-w-full border-separate border-spacing-y-1">
          <thead>
            <tr className="text-[11px] text-slate-500">
              <th className="px-2 text-left">Title</th>
              <th className="px-2 text-left">Location</th>
              <th className="px-2 text-left">Category</th>
              <th className="px-2 text-left">Status</th>
              <th className="px-2 text-left">Upvotes</th>
              <th className="px-2 text-left">Priority</th>
              <th className="px-2 text-left">Reporter</th>
              <th className="px-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((i) => (
              <tr key={i._id} className="rounded-2xl bg-amber-50/40">
                <td className="px-2 py-1 text-[11px] font-medium text-slate-800">
                  {i.title}
                </td>
                <td className="px-2 py-1 text-[11px] text-slate-600">
                  {i.locationName}
                </td>
                <td className="px-2 py-1 text-[11px] text-slate-600">
                  {i.category}
                </td>
                <td className="px-2 py-1 text-[11px] text-slate-600">
                  {i.status}
                </td>
                <td className="px-2 py-1 text-[11px] text-slate-600">
                  {i.upvoteCount}
                </td>
                <td className="px-2 py-1 text-[11px] text-slate-600">
                  {i.priorityScore}
                </td>
                <td className="px-2 py-1 text-[11px] text-slate-600">
                  {i.isAnonymous ? "Anonymous नागरिक" : i.createdBy?.name}
                </td>
                <td className="px-2 py-1">
                  <div className="flex flex-wrap gap-1">
                    <button
                      onClick={() => updateStatus(i._id, "in_progress")}
                      className="rounded-full bg-sky-100 px-2 py-0.5 text-[11px] text-sky-800"
                    >
                      Mark in progress
                    </button>
                    <button
                      onClick={() => updateStatus(i._id, "resolved")}
                      className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] text-emerald-800"
                    >
                      Mark resolved
                    </button>
                    <button
                      onClick={() => downloadPdf(i._id)}
                      className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-white"
                    >
                      PDF
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {issues.length === 0 && (
          <p className="mt-3 text-[11px] text-slate-500">
            कुनै डेटा उपलब्ध छैन।
          </p>
        )}
      </div>
    </main>
  );
};

export default AdminDashboard;
