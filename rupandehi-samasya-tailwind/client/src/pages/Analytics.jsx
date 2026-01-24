import React, { useEffect, useState } from "react";
import api from "../api/client";
import IssueMap from "../components/IssueMap";

const Analytics = () => {
  const [stats, setStats] = useState(null);
  const [mapIssues, setMapIssues] = useState([]);

  useEffect(() => {
    (async () => {
      const [sRes, mRes] = await Promise.all([
        api.get("/api/stats/overview"),
        api.get("/api/issues/map")
      ]);
      setStats(sRes.data);
      setMapIssues(mRes.data);
    })();
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-3 py-4 space-y-4">
      <div className="rounded-3xl border border-amber-100 bg-white/90 p-4 shadow-sm shadow-amber-100">
        <h1 className="text-sm font-semibold text-slate-900">
          Rupandehi समस्या आँकडा
        </h1>
        {stats ? (
          <div className="mt-3 grid grid-cols-2 gap-3 text-xs md:grid-cols-4">
            <div className="rounded-2xl bg-amber-50 px-3 py-2">
              <div className="text-[11px] text-amber-700">Total reported</div>
              <div className="text-lg font-semibold text-amber-900">
                {stats.total}
              </div>
            </div>
            <div className="rounded-2xl bg-rose-50 px-3 py-2">
              <div className="text-[11px] text-rose-700">Pending</div>
              <div className="text-lg font-semibold text-rose-900">
                {stats.pending}
              </div>
            </div>
            <div className="rounded-2xl bg-sky-50 px-3 py-2">
              <div className="text-[11px] text-sky-700">In progress</div>
              <div className="text-lg font-semibold text-sky-900">
                {stats.inProgress}
              </div>
            </div>
            <div className="rounded-2xl bg-emerald-50 px-3 py-2">
              <div className="text-[11px] text-emerald-700">Resolved</div>
              <div className="text-lg font-semibold text-emerald-900">
                {stats.resolved}
              </div>
            </div>
          </div>
        ) : (
          <p className="mt-3 text-xs text-slate-500">Loading…</p>
        )}
      </div>
      <IssueMap issues={mapIssues} height={360} />
    </main>
  );
};

export default Analytics;
