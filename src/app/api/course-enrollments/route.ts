import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const query = `
      SELECT 
        ce.id,
        c.title AS course_title,
        ce.course_duration,
        ce.name,
        ce.mobile_number,
        ce.email
      FROM course_enrollments ce
      JOIN courses c ON ce.course_id = c.id
      ORDER BY ce.id DESC;
    `;

    const result = await pool.query(query);

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Database error" },
      { status: 500 }
    );
  }
}
