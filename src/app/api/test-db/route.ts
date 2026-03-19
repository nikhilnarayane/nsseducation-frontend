import pool from "lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows]: any = await pool.query("SELECT NOW() as time");

    return NextResponse.json({
      success: true,
      time: rows[0].time,
    });

  } catch (error: any) {
    console.error("DB CONNECTION ERROR:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}