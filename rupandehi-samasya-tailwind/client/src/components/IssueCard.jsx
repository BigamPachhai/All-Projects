import React from "react";
import { useNavigate } from "react-router-dom";

const CATEGORY_LABELS = {
  waste: "Waste / Garbage",
  water: "Water",
  electrical: "Electricity",
  road: "Road / Street",
  other: "Other"
};

const STATUS_COLORS = {
  pending: "bg-amber-100 text-amber-800",
  in_progress: "bg-sky-100 text-sky-800",
  resolved: "bg-emerald-100 text-emerald-800"
};

const IssueCard = ({ issue, onUpvote }) => {
  const navigate = useNavigate();
  const created = new Date(issue.createdAt);
  const dateStr = created.toLocaleString("en-GB", {
    timeZone: "Asia/Kathmandu"
  });

  return (
    <article
      onClick={() => navigate(`/issues/${issue._id}`)}
      className="group cursor-pointer rounded-2xl border border-amber-100 bg-white/90 p-4 shadow-sm shadow-amber-100 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-amber-200"
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2 text-[11px]">
          <span className="rounded-full bg-amber-100 px-2 py-0.5 font-medium text-amber-800">
            {CATEGORY_LABELS[issue.category] || "Issue"}
          </span>
          {issue.priorityScore > 60 && (
            <span className="rounded-full bg-rose-100 px-2 py-0.5 font-medium text-rose-800">
              High priority
            </span>
          )}
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${STATUS_COLORS[issue.status]}`}
          >
            {issue.status}
          </span>
        </div>
        <span className="text-[10px] text-slate-500">{dateStr}</span>
      </div>
      <h3 className="line-clamp-1 text-sm font-semibold text-slate-900">
        {issue.title}
      </h3>
      <p className="mt-1 line-clamp-2 text-xs text-slate-600">
        {issue.description}
      </p>
      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="flex items-center gap-1 text-slate-500">
          <span className="text-[13px]">📍</span>
          <span className="line-clamp-1 max-w-[160px]">
            {issue.locationName}
          </span>
        </span>
        <div
          className="flex items-center gap-3 text-[11px]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="flex items-center gap-1 rounded-full border border-amber-200 px-2 py-0.5 text-amber-800 hover:bg-amber-50"
            onClick={() => onUpvote(issue._id)}
          >
            ⬆ <span>{issue.upvoteCount || 0}</span>
          </button>
          <span>💬 {issue.comments?.length || 0}</span>
        </div>
      </div>
    </article>
  );
};

export default IssueCard;
