"use client";

const statusOptions = ["All", "Pending", "Approved", "Rejected", "Under Review"];
const loanTypeOptions = ["All", "Personal", "Business", "Mortgage", "Auto", "Education", "Medical"];

export default function FilterBar({ filters, onChange }) {
  const handleChange = (key, value) => onChange({ ...filters, [key]: value });

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {/* Search */}
      <div className="relative flex-1 ">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search by name or email..."
          value={filters.search}
          onChange={(e) => handleChange("search", e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
        />
      </div>

      {/* Status Filter */}
      <select
        value={filters.status}
        onChange={(e) => handleChange("status", e.target.value)}
        className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary-500 bg-linear-to-br from-navy-900 via-primary-900 to-navy-900 cursor-pointer"
      >
        {statusOptions.map((s) => <option key={s}>{s}</option>)}
      </select>

      {/* Loan Type Filter */}
      <select
        value={filters.loanType}
        onChange={(e) => handleChange("loanType", e.target.value)}
        className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary-500 bg-linear-to-br from-navy-900 via-primary-900 to-navy-900 cursor-pointer"
      >
        {loanTypeOptions.map((t) => <option key={t}>{t}</option>)}
      </select>
    </div>
  );
}
