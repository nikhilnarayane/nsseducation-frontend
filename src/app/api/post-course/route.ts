import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { courseId, courseDuration, name, mobileNumber, email } = body;

    const query = `
      INSERT INTO courses_enquiry
      (course_id, course_duration, name, mobile_number, email)
      VALUES (?, ?, ?, ?, ?)
    `;

    const [result]: any = await pool.query(query, [
      courseId,
      courseDuration,
      name,
      mobileNumber,
      email,
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



// import { NextResponse } from "next/server";
// import pool from "@/lib/db";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { courseId, courseDuration, name, mobileNumber, email } = body;

//     const query = `
//       INSERT INTO courses_enquiry

//       (course_id, course_duration, name, mobile_number, email)
//       VALUES ($1, $2, $3, $4, $5)
//       RETURNING *;
//     `;

//     const result = await pool.query(query, [
//       courseId,
//       courseDuration,
//       name,
//       mobileNumber,
//       email,
//     ]);

//     return NextResponse.json(result.rows[0]);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Database error" }, { status: 500 });
//   }
// }
