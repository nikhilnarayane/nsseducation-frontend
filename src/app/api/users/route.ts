// import pool from "@/lib/db";
// import { NextResponse } from "next/server";

// type UserBody = {
//   name: string;
//   mobile: string;
//   email: string;
// };

// export async function POST(req: Request) {
//   try {
//     debugger;
//     const body: UserBody = await req.json();
//     const { name, mobile, email } = body;

//     if (!name || !mobile || !email) {
//       return NextResponse.json(
//         { error: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     const result = await pool.query(
//       "INSERT INTO users (name, mobile, email) VALUES ($1, $2, $3) RETURNING *",
//       [name, mobile, email]
//     );

//     return NextResponse.json(result.rows[0], { status: 201 });

//   } catch (error: unknown) {
//     console.error(error);

//     return NextResponse.json(
//       { error: "Database error" },
//       { status: 500 }
//     );
//   }
// }

import pool from "@/lib/db";
import { NextResponse } from "next/server";

type UserBody = {
  name: string;
  mobile: string;
  email: string;
};

export async function POST(req: Request) {
  try {
    const body: UserBody = await req.json();
    const { name, mobile, email } = body;

    if (!name || !mobile || !email) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      "INSERT INTO users (name, mobile, email) VALUES ($1, $2, $3) RETURNING *",
      [name, mobile, email]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM users ORDER BY id ASC");
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
