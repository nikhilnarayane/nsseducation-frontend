
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      full_name,
      email,
      mobile_number,
      subject,
      select_department,
      message,
    } = body;

    // ✅ Basic validation
    if (!full_name || !email || !mobile_number) {
      return NextResponse.json(
        { success: false, error: "Required fields missing" },
        { status: 400 }
      );
    }

    const query = `
      INSERT INTO contact
      (full_name, email, mobile_number, subject, select_department, message)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const [result]: any = await pool.query(query, [
      full_name,
      email,
      mobile_number,
      subject,
      select_department,
      message,
    ]);

    return NextResponse.json({
      success: true,
      insertId: result.insertId,
    });

  } catch (error: any) {
    console.error("DB ERROR:", error);

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}