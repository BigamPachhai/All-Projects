import React, { useEffect, useState } from "react";
import api from "../api/client";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/api/admin/leaderboard");
        setLeaders(res.data);
      } catch {
        // ignore
      }
    })();
  }, []);

  return (
    <main className="mx-auto max-w-3xl px-3 py-5">
      <div className="rounded-3xl border border-amber-100 bg-white/90 p-5 shadow-md shadow-amber-100">
        <h1 className="text-lg font-semibold text-slate-900">
          Citizen leaderboard (monthly)
        </h1>
        <p className="mt-1 text-xs text-slate-600">
          समस्याहरू रिपोर्ट गर्ने र समाधान गराउने सक्रिय नागरिकहरू।
        </p>
        <ol className="mt-4 space-y-2 text-sm">
          {leaders.map((u, idx) => (
            <li
              key={u._id || idx}
              className="flex items-center justify-between rounded-2xl bg-amber-50 px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-600 text-xs font-semibold text-white">
                  {idx + 1}
                </span>
                <span className="font-medium text-slate-800">
                  {u.name}
                </span>
              </div>
              <div className="text-xs text-amber-900">
                {u.monthlyPoints} pts
              </div>
            </li>
          ))}
          {leaders.length === 0 && (
            <p className="text-xs text-slate-500">
              डेटा हेर्न एडमिनले सिस्टम प्रयोग गर्न आवश्यक छ (या backend
              बाट निकाल्नुपर्छ)।
            </p>
          )}
        </ol>
      </div>
    </main>
  );
};

export default Leaderboard;
