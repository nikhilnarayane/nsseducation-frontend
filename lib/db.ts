// import { Pool } from "pg";

// const pool = new Pool({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "postgres",
//   password: process.env.DB_PASSWORD || "Nikhil@123",
//   database: process.env.DB_NAME || "postgres",
//   port: Number(process.env.DB_PORT) || 5432,
// });
// export default pool;

import { Pool } from "pg";

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
});
console.log("DB HOST:", process.env.DB_HOST);

export default pool;


