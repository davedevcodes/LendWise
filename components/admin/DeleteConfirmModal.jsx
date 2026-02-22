"use client";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

export default function DeleteConfirmModal({ application, isOpen, onClose, onConfirm }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await onConfirm(application._id);
    setLoading(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Confirm Deletion" maxWidth="max-w-md">
      <div className="text-center py-4">
        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-navy-900 mb-2">Delete Application?</h3>
        <p className="text-gray-500 text-sm mb-2">
          You are about to delete the application from{" "}
          <span className="font-semibold text-navy-900">{application?.fullName}</span>.
        </p>
        <p className="text-gray-400 text-xs mb-8">This action cannot be undone.</p>
        <div className="flex gap-3 justify-center">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button variant="danger" loading={loading} onClick={handleDelete}>Yes, Delete</Button>
        </div>
      </div>
    </Modal>
  );
}
