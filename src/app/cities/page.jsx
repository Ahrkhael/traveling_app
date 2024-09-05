// src/app/cities/page.jsx
import Link from "next/link";
import path from "path";
import { promises as fs } from "fs";

// Esta función ahora se ejecuta como parte del componente del servidor
export default async function Cities() {
  // Leer el archivo data.json desde el sistema de archivos
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);
  const cities = data.Cities;

  return (
    <div>
      <h1>Cities page</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.city}>
            <Link href={`/${city.city}`}>{city.city}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
