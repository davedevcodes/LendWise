import { formatCurrency } from "@/utils/formatCurrency";
import { formatDate } from "@/utils/formatDate";
import StatusBadge from "./StatusBadge";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";

export default function ApplicationsTable({ applications, loading, onView, onDelete }) {
  if (loading) {
    return <div className="py-20"><Spinner size="lg" /></div>;
  }

  if (!applications || applications.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4">📭</div>
        <h3 className="font-semibold text-navy-900 text-lg">No Applications Found</h3>
        <p className="text-gray-400 text-sm mt-2">No applications match your current filters.</p>
      </div>
    );
  }

  return (
    <>
      {/* Desktop table — hidden on mobile */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Applicant</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Loan Type</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Amount</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary-500 to-primary-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {app.fullName?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-medium text-navy-900">{app.fullName}</div>
                      <div className="text-xs text-gray-400">{app.email}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="px-2.5 py-1 rounded-lg bg-primary-50 text-primary-700 text-xs font-medium">
                    {app.loanType}
                  </span>
                </td>
                <td className="py-4 px-4 font-semibold text-navy-900">{formatCurrency(app.amount)}</td>
                <td className="py-4 px-4"><StatusBadge status={app.status} /></td>
                <td className="py-4 px-4 text-gray-500">{formatDate(app.createdAt)}</td>
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => onView(app)}>View</Button>
                    <Button size="sm" variant="danger" onClick={() => onDelete(app)}>Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards — shown only on mobile */}
      <div className="md:hidden divide-y divide-gray-100">
        {applications.map((app) => (
          <div key={app._id} className="p-4 space-y-3">
            {/* Row 1: avatar + name + status */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-full bg-linear-to-br from-primary-500 to-primary-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {app.fullName?.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <div className="font-medium text-navy-900 text-sm truncate">{app.fullName}</div>
                  <div className="text-xs text-gray-400 truncate">{app.email}</div>
                </div>
              </div>
              <StatusBadge status={app.status} />
            </div>

            {/* Row 2: loan type + amount + date */}
            <div className="flex items-center gap-3 text-xs text-gray-500 flex-wrap">
              <span className="px-2 py-0.5 rounded-lg bg-primary-50 text-primary-700 font-medium">{app.loanType}</span>
              <span className="font-semibold text-navy-900">{formatCurrency(app.amount)}</span>
              <span>{formatDate(app.createdAt)}</span>
            </div>

            {/* Row 3: actions */}
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => onView(app)} className="flex-1">View</Button>
              <Button size="sm" variant="danger" onClick={() => onDelete(app)} className="flex-1">Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}