"use client";
import { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import Sidebar from "@/components/admin/Sidebar";
import DashboardCards from "@/components/admin/DashboardCards";
import ApplicationsTable from "@/components/admin/ApplicationsTable";
import ApplicationModal from "@/components/admin/ApplicationModal";
import DeleteConfirmModal from "@/components/admin/DeleteConfirmModal";
import FilterBar from "@/components/admin/FilterBar";
import AdminLoginForm from "@/components/admin/AdminLoginForm";
import Card from "@/components/ui/Card";

const defaultFilters = { search: "", status: "All", loanType: "All" };
const SESSION_KEY = "lendwise_admin_auth";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(defaultFilters);

  const [viewModal, setViewModal] = useState({ open: false, app: null });
  const [deleteModal, setDeleteModal] = useState({ open: false, app: null });

  // Restore session on mount
  useEffect(() => {
    const auth = sessionStorage.getItem(SESSION_KEY);
    if (auth === "true") setIsAuthenticated(true);
    setAuthChecked(true);
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem(SESSION_KEY, "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  };

  const fetchApplications = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.search) params.set("search", filters.search);
      if (filters.status !== "All") params.set("status", filters.status);
      if (filters.loanType !== "All") params.set("loanType", filters.loanType);

      const res = await fetch(`/api/applications?${params.toString()}`);
      const data = await res.json();
      if (data.success) {
        setApplications(data.data);
        setStats(data.stats);
      }
    } catch {
      toast.error("Failed to load applications.");
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    if (!isAuthenticated) return;
    const debounce = setTimeout(fetchApplications, 300);
    return () => clearTimeout(debounce);
  }, [fetchApplications, isAuthenticated]);

  const handleStatusUpdate = async (id, status) => {
    try {
      const res = await fetch(`/api/applications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Status updated successfully!");
        fetchApplications();
      } else {
        toast.error(data.message || "Update failed.");
      }
    } catch {
      toast.error("Network error.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/applications/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        toast.success("Application deleted.");
        fetchApplications();
      } else {
        toast.error(data.message || "Delete failed.");
      }
    } catch {
      toast.error("Network error.");
    }
  };

  if (!authChecked) return null;
  if (!isAuthenticated) return <AdminLoginForm onLogin={handleLogin} />;

  return (
    <div className="flex min-h-screen bg-linear-to-br from-navy-900 via-primary-900 to-navy-900">

      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — hidden off-screen on mobile, slides in when open */}
      <div className={`
        fixed bg-linear-to-br from-navy-900 via-primary-900 to-navy-900 inset-y-0 left-0 z-30 transition-transform duration-300 lg:static lg:translate-x-0 lg:z-auto
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-auto min-w-0">

        {/* Top bar */}
        <div className="text-white px-4 sm:px-8 py-4 flex items-center justify-between gap-4 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 className="font-display text-lg sm:text-2xl font-bold text-navy-900 leading-tight">Dashboard</h1>
              <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Manage and review all loan applications</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-500 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-colors whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>

        {/* Page content */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6">
          <DashboardCards stats={stats} />

          <Card padding={false} id="applications">
            <div className="p-4 sm:p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-navy-900 text-base sm:text-lg">Loan Applications</h2>
                <span className="text-xs sm:text-sm text-gray-400">
                  {applications.length} result{applications.length !== 1 ? "s" : ""}
                </span>
              </div>
              <FilterBar filters={filters} onChange={setFilters} />
            </div>
            <ApplicationsTable
              applications={applications}
              loading={loading}
              onView={(app) => setViewModal({ open: true, app })}
              onDelete={(app) => setDeleteModal({ open: true, app })}
            />
          </Card>
        </div>
      </main>

      {/* Modals */}
      {viewModal.app && (
        <ApplicationModal
          application={viewModal.app}
          isOpen={viewModal.open}
          onClose={() => setViewModal({ open: false, app: null })}
          onStatusUpdate={handleStatusUpdate}
        />
      )}
      {deleteModal.app && (
        <DeleteConfirmModal
          application={deleteModal.app}
          isOpen={deleteModal.open}
          onClose={() => setDeleteModal({ open: false, app: null })}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
}