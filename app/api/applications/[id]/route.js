import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Loan from "@/lib/models/Loan";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const loan = await Loan.findById(params.id);
    if (!loan) return NextResponse.json({ success: false, message: "Loan not found." }, { status: 404 });
    return NextResponse.json({ success: true, data: loan });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  try {
    await connectDB();
    const body = await request.json();
    const { status } = body;

    const validStatuses = ["Pending", "Approved", "Rejected", "Under Review"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ success: false, message: "Invalid status value." }, { status: 400 });
    }

    const loan = await Loan.findByIdAndUpdate(params.id, { status }, { new: true, runValidators: true });
    if (!loan) return NextResponse.json({ success: false, message: "Loan not found." }, { status: 404 });

    return NextResponse.json({ success: true, message: "Status updated.", data: loan });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const loan = await Loan.findByIdAndDelete(params.id);
    if (!loan) return NextResponse.json({ success: false, message: "Loan not found." }, { status: 404 });
    return NextResponse.json({ success: true, message: "Application deleted successfully." });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
  }
}
