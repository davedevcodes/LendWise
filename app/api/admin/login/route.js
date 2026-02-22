import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { password } = await request.json();

    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json({ success: false, message: "Admin password not configured." }, { status: 500 });
    }

    if (password !== adminPassword) {
      return NextResponse.json({ success: false, message: "Incorrect password." }, { status: 401 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, message: "Server error." }, { status: 500 });
  }
}