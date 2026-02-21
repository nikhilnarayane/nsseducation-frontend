import pool from "@/lib/db";
import { NextResponse } from "next/server";

// GET /api/users
export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM users ORDER BY id ASC");
    
    // Return all users (empty array if no rows)
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("DB Error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown DB error" }, { status: 500 });
  }
}
