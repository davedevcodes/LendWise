"use client";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import StatusBadge from "./StatusBadge";
import Button from "@/components/ui/Button";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDateTime } from "@/utils/formatDate";

const statusOptions = ["Pending", "Approved", "Rejected", "Under Review"];

function InfoRow({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</span>
      <span className="text-sm text-navy-900 font-medium mt-0.5">{value || "—"}</span>
    </div>
  );
}

export default function ApplicationModal({ application, isOpen, onClose, onStatusUpdate }) {
  const [status, setStatus] = useState(application?.status || "Pending");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    await onStatusUpdate(application._id, status);
    setLoading(false);
    onClose();
  };

  if (!application) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Application Details" maxWidth="max-w-2xl">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white font-bold flex items-center justify-center text-lg">
              {application.fullName?.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-navy-900">{application.fullName}</div>
              <div className="text-sm text-gray-500">{application.email}</div>
            </div>
          </div>
          <StatusBadge status={application.status} />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          <InfoRow label="Phone" value={application.phone} />
          <InfoRow label="Loan Type" value={application.loanType} />
          <InfoRow label="Amount" value={formatCurrency(application.amount)} />
          <InfoRow label="Employment" value={application.employmentStatus} />
          <InfoRow label="Monthly Income" value={formatCurrency(application.monthlyIncome)} />
          <InfoRow label="Applied On" value={formatDateTime(application.createdAt)} />
        </div>

        <div>
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wide block mb-1">Address</span>
          <p className="text-sm text-navy-900">{application.address}</p>
        </div>

        <div>
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wide block mb-1">Loan Purpose</span>
          <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 rounded-xl p-3">{application.purpose}</p>
        </div>

        {/* Status Update */}
        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm font-medium text-navy-900 mb-3">Update Status</p>
          <div className="flex gap-3">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary-500 bg-white"
            >
              {statusOptions.map((s) => <option key={s}>{s}</option>)}
            </select>
            <Button onClick={handleUpdate} loading={loading}>Update</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
