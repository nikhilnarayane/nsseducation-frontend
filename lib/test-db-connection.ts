import pool from "./db"; // make sure path is correct

(async () => {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("DB connected successfully:", res.rows[0]);
    process.exit(0); // exit script
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1);
  }
})();