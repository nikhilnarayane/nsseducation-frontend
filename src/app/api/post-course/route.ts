import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { courseId, courseDuration, name, mobileNumber, email } = body;

    const query = `
      INSERT INTO course_enrollments
      (course_id, course_duration, name, mobile_number, email)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const result = await pool.query(query, [
      courseId,
      courseDuration,
      name,
      mobileNumber,
      email,
    ]);

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
