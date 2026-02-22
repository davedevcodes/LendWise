import mongoose from "mongoose";

const LoanSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  loanType: {
    type: String,
    required: true,
    enum: ["Personal", "Business", "Mortgage", "Auto", "Education", "Medical"],
  },
  amount: { type: Number, required: true, min: 1000 },
  employmentStatus: {
    type: String,
    required: true,
    enum: ["Employed", "Self-Employed", "Unemployed", "Retired", "Student"],
  },
  monthlyIncome: { type: Number, required: true, min: 0 },
  purpose: { type: String, required: true, trim: true },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected", "Under Review"],
    default: "Pending",
  },
  createdAt: { type: Date, default: Date.now },
});

const Loan = mongoose.models.Loan || mongoose.model("Loan", LoanSchema);

export default Loan;
