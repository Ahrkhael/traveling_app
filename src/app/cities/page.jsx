// src/app/cities/page.jsx
import Link from "next/link";

// Función asíncrona para obtener los datos de las ciudades desde la API
async function fetchCities() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cities`
    );

    // Verificar que la respuesta es exitosa y con el tipo correcto
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Asegurarse de que la respuesta sea JSON
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    // Retorna un arreglo vacío o maneja el error de otra forma
    return [];
  }
}

export default async function Cities() {
  // Llamar a la función para obtener los datos
  const cities = await fetchCities();

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
