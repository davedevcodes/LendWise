import Card from "@/components/ui/Card";

const cardConfig = [
  { key: "total",      label: "Total Applications", icon: "📋", color: "text-primary-600 bg-primary-50" },
  { key: "approved",   label: "Approved",            icon: "✅", color: "text-emerald-600 bg-emerald-50" },
  { key: "pending",    label: "Pending",             icon: "⏳", color: "text-amber-600 bg-amber-50" },
  { key: "rejected",   label: "Rejected",            icon: "❌", color: "text-red-600 bg-red-50" },
];

export default function DashboardCards({ stats }) {
  if (!stats) return null;

  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5">
      {cardConfig.map(({ key, label, icon, color }) => (
        <Card key={key} className="flex items-center gap-3 sm:gap-4">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-lg sm:text-xl shrink-0 ${color}`}>
            {icon}
          </div>
          <div className="min-w-0">
            <div className="text-xl sm:text-2xl font-bold text-navy-900">{stats[key] ?? 0}</div>
            <div className="text-xs sm:text-sm text-gray-500 truncate">{label}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}