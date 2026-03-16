import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("DB Connected:", result.rows);

    return Response.json({ success: true });

  } catch (error) {
    console.error("DB Error:", error);

    return Response.json({ success: false });
  }
}
