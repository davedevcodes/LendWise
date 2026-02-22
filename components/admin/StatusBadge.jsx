const statusConfig = {
  Pending: { color: "bg-amber-100 text-amber-700", dot: "bg-amber-400" },
  Approved: { color: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-400" },
  Rejected: { color: "bg-red-100 text-red-700", dot: "bg-red-400" },
  "Under Review": { color: "bg-blue-100 text-blue-700", dot: "bg-blue-400" },
};

export default function StatusBadge({ status }) {
  const config = statusConfig[status] || statusConfig["Pending"];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold ${config.color}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {status}
    </span>
  );
}
