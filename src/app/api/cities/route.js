// src/app/api/cities/route.js
import path from "path";
import { promises as fs } from "fs";

export async function GET(request) {
  try {
    // Obtener la ruta al archivo JSON
    const filePath = path.join(process.cwd(), "data", "data.json");

    // Leer y parsear los datos del archivo JSON
    const jsonData = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(jsonData);

    // Devolver los datos como respuesta JSON
    return new Response(JSON.stringify(data.Cities), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Manejar errores si ocurren
    return new Response(JSON.stringify({ message: "Error reading data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
