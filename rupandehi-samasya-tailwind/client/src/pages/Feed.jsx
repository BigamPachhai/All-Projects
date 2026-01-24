import React, { useEffect, useState } from "react";
import api from "../api/client";
import { useAuth } from "../context/AuthContext";
import IssueCard from "../components/IssueCard";
import IssueMap from "../components/IssueMap";

const Feed = () => {
  const { user } = useAuth();
  const [issues, setIssues] = useState([]);
  const [mapIssues, setMapIssues] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    status: "",
    sort: "latest"
  });

  const loadIssues = async () => {
    const params = new URLSearchParams();
    if (filters.category) params.set("category", filters.category);
    if (filters.status) params.set("status", filters.status);
    if (filters.sort) params.set("sort", filters.sort);
    const res = await api.get(`/api/issues?${params.toString()}`);
    setIssues(res.data);
    const mapRes = await api.get("/api/issues/map");
    setMapIssues(mapRes.data);
  };

  useEffect(() => {
    loadIssues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.category, filters.status, filters.sort]);

  const handleUpvote = async (id) => {
    if (!user) {
      alert("पहिला Login गर्नुहोस्।");
      return;
    }
    const res = await api.post(`/api/issues/${id}/upvote`);
    setIssues((prev) =>
      prev.map((i) =>
        i._id === id ? { ...i, upvoteCount: res.data.upvoteCount } : i
      )
    );
  };

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-4 px-3 py-4 md:flex-row">
      <section className="flex-[1.2] space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-amber-100 bg-white/90 p-3 text-xs">
          <div className="font-semibold text-slate-800">
            सार्वजनिक समस्या बोर्ड
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={filters.category}
              onChange={(e) =>
                setFilters((f) => ({ ...f, category: e.target.value }))
              }
              className="rounded-full border border-amber-200 bg-amber-50/50 px-2 py-1 text-[11px] text-slate-700"
            >
              <option value="">All categories</option>
              <option value="waste">Waste</option>
              <option value="water">Water</option>
              <option value="electrical">Electrical</option>
              <option value="road">Road</option>
              <option value="other">Other</option>
            </select>
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters((f) => ({ ...f, status: e.target.value }))
              }
              className="rounded-full border border-amber-200 bg-amber-50/50 px-2 py-1 text-[11px] text-slate-700"
            >
              <option value="">All status</option>
              <option value="pending">Pending</option>
              <option value="in_progress">In progress</option>
              <option value="resolved">Resolved</option>
            </select>
            <select
              value={filters.sort}
              onChange={(e) =>
                setFilters((f) => ({ ...f, sort: e.target.value }))
              }
              className="rounded-full border border-amber-200 bg-amber-50/50 px-2 py-1 text-[11px] text-slate-700"
            >
              <option value="latest">Latest</option>
              <option value="top">Top upvoted</option>
              <option value="priority">High priority</option>
            </select>
          </div>
        </div>
        <div className="space-y-3">
          {issues.length === 0 && (
            <div className="rounded-2xl border border-dashed border-amber-200 bg-amber-50/60 p-4 text-xs text-slate-600">
              अहिलेसम्म कुनै समस्या रिपोर्ट भएको छैन वा फिल्टर अनुसार उपलब्ध
              छैन।
            </div>
          )}
          {issues.map((issue) => (
            <IssueCard key={issue._id} issue={issue} onUpvote={handleUpvote} />
          ))}
        </div>
      </section>
      <section className="flex-1">
        <IssueMap issues={mapIssues} />
      </section>
    </main>
  );
};

export default Feed;
