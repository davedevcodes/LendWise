import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Loan from "@/lib/models/Loan";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const { fullName, email, phone, address, loanType, amount, employmentStatus, monthlyIncome, purpose } = body;

    if (!fullName || !email || !phone || !address || !loanType || !amount || !employmentStatus || !monthlyIncome || !purpose) {
      return NextResponse.json({ success: false, message: "All fields are required." }, { status: 400 });
    }

    const loan = await Loan.create({
      fullName,
      email,
      phone,
      address,
      loanType,
      amount: Number(amount),
      employmentStatus,
      monthlyIncome: Number(monthlyIncome),
      purpose,
    });

    return NextResponse.json({ success: true, message: "Application submitted successfully!", data: loan }, { status: 201 });
  } catch (error) {
    console.error("Apply POST error:", error);
    return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
  }
}
