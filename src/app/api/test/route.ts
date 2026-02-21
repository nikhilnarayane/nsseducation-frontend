// import pool from "@/lib/db";

// // export async function GET() {
// //   const [rows] = await db.query("SELECT 1 + 1 AS result");
// //   return Response.json(rows);
// // }

// export async function GET() {
//   try {
//     const result = await pool.query("SELECT NOW()");
//     return Response.json(result.rows);
//   } catch (error) {
//     console.error(error);
//     return Response.json({ error: "Database error" }, { status: 500 });
//   }
// }

export const dynamic = "force-dynamic";

import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query("SELECT NOW()");
     console.log("DB CONNECTION SUCCESS:", result.rows[0]);
    return Response.json(result.rows);
  } catch (error: any) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}