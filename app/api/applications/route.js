import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Loan from "@/lib/models/Loan";

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const loanType = searchParams.get("loanType");
    const search = searchParams.get("search");

    const filter = {};
    if (status && status !== "All") filter.status = status;
    if (loanType && loanType !== "All") filter.loanType = loanType;
    if (search) {
      filter.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    const loans = await Loan.find(filter).sort({ createdAt: -1 });

    const stats = {
      total: await Loan.countDocuments(),
      approved: await Loan.countDocuments({ status: "Approved" }),
      pending: await Loan.countDocuments({ status: "Pending" }),
      rejected: await Loan.countDocuments({ status: "Rejected" }),
      underReview: await Loan.countDocuments({ status: "Under Review" }),
    };

    return NextResponse.json({ success: true, data: loans, stats }, { status: 200 });
  } catch (error) {
    console.error("Applications GET error:", error);
    return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
  }
}
