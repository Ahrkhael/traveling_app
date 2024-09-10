// src/app/api/cities/route.js
import connection from "@/lib/db";

export async function GET(request) {
  try {
    const [rows] = await connection.execute("SELECT * FROM cities");
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching cities:", error);
    return new Response(JSON.stringify({ message: "Error fetching cities" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
