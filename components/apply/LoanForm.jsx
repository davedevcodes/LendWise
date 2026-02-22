"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";
import SubmitButton from "./SubmitButton";

const loanTypes = ["Personal", "Business", "Mortgage", "Auto", "Education", "Medical"];
const employmentStatuses = ["Employed", "Self-Employed", "Unemployed", "Retired", "Student"];

const initialState = {
  fullName: "", email: "", phone: "", address: "", BVN: "", NIN: "",
  loanType: "", amount: "", employmentStatus: "",
  monthlyIncome: "", purpose: "",
};

export default function LoanForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = "Valid email is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    if (!form.BVN.trim()) errs.BVN = "BVN is required";
    if (!form.NIN.trim()) errs.NIN = "NIN is required";
    if (!form.address.trim()) errs.address = "Address is required";
    if (!form.loanType) errs.loanType = "Loan type is required";
    if (!form.amount || Number(form.amount) < 1000) errs.amount = "Minimum loan amount is $1,000";
    if (!form.employmentStatus) errs.employmentStatus = "Employment status is required";
    if (!form.monthlyIncome || Number(form.monthlyIncome) < 0) errs.monthlyIncome = "Monthly income is required";
    if (!form.purpose.trim()) errs.purpose = "Purpose is required";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, amount: Number(form.amount), monthlyIncome: Number(form.monthlyIncome) }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setForm(initialState);
      } else {
        setErrors({ submit: data.message || "Something went wrong." });
      }
    } catch {
      setErrors({ submit: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8"
      >
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">Application Submitted!</h3>
        <p className="text-gray-500 mb-8">We have received your loan application. Expect a response within 24 hours.</p>
        <button onClick={() => setSuccess(false)} className="px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors">
          Submit Another Application
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.submit && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">{errors.submit}</div>
      )}

      {/* Personal Info */}
      <div>
        <h3 className="font-semibold text-navy-900 mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 text-xs font-bold flex items-center justify-center">1</span>
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput label="Full Name" id="fullName" name="fullName" value={form.fullName} onChange={handleChange} error={errors.fullName} placeholder="John Doe" required />
          <FormInput label="Email Address" id="email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="john@example.com" required />
          <FormInput label="Phone Number" id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} placeholder="+1 (555) 000-0000" required />
          <FormInput label="Address" id="address" name="address" value={form.address} onChange={handleChange} error={errors.address} placeholder="123 Main St, City, State" required />
          <FormInput label="BVN Number" id="BVN" name="BVN" type="tel" value={form.BVN} onChange={handleChange} error={errors.BVN} placeholder="BVN number" required />
          <FormInput label="NIN Number" id="NIN" name="NIN" type="tel" value={form.NIN} onChange={handleChange} error={errors.NIN} placeholder="NIN number" required />
        </div>
      </div>

      {/* Loan Details */}
      <div>
        <h3 className="font-semibold text-navy-900 mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 text-xs font-bold flex items-center justify-center">2</span>
          Loan Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormSelect label="Loan Type" id="loanType" name="loanType" options={loanTypes} value={form.loanType} onChange={handleChange} error={errors.loanType} placeholder="Select loan type" required />
          <FormInput label="Loan Amount (NGN)" id="amount" name="amount" type="number" min="1000" value={form.amount} onChange={handleChange} error={errors.amount} placeholder="10000" required />
        </div>
      </div>

      {/* Financial Info */}
      <div>
        <h3 className="font-semibold text-navy-900 mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 text-xs font-bold flex items-center justify-center">3</span>
          Financial Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormSelect label="Employment Status" id="employmentStatus" name="employmentStatus" options={employmentStatuses} value={form.employmentStatus} onChange={handleChange} error={errors.employmentStatus} placeholder="Select status" required />
          <FormInput label="Monthly Income (NGN)" id="monthlyIncome" name="monthlyIncome" type="number" min="0" value={form.monthlyIncome} onChange={handleChange} error={errors.monthlyIncome} placeholder="5000" required />
        </div>
        <div className="mt-4">
          <FormTextarea label="Loan Purpose" id="purpose" name="purpose" value={form.purpose} onChange={handleChange} error={errors.purpose} placeholder="Please describe why you need this loan and how you plan to use the funds..." required />
        </div>
      </div>

      <SubmitButton loading={loading} />
    </form>
  );
}
