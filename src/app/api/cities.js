import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  try {
    // Lee el archivo JSON desde el sistema de archivos
    const filePath = path.join(process.cwd(), "data", "data.json");
    const jsonData = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(jsonData);

    res.status(200).json(data);
  } catch (error) {
    console.error("Error reading data.json:", error);
    res.status(500).json({ error: "Failed to load data" });
  }
}
