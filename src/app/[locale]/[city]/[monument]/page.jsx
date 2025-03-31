import styles from "./page.module.css";
import MonumentContent from "../../../../components/monumentContent/monumentContent";

export async function generateStaticParams() {
  // Llama a tu backend para obtener la lista de monumentos
  // Asegúrate de que la URL corresponda a tu entorno
  const res = await fetch("http://localhost:3001/api/v1/monuments/names");

  if (!res.ok) {
    throw new Error("Error getting cities");
  }

  const monuments = await res.json();

  // Mapea los monumentos para generar los parámetros necesarios
  const staticParams = monuments.map((monument) => ({
    monument: monument,
  }));

  return staticParams;
}

async function fetchMonumentData(city, monument) {
  const decodedCity = decodeURIComponent(city);
  const decodedMonument = decodeURIComponent(monument);

  const res = await fetch(
    `http://localhost:3001/api/v1/monuments/by_name/${decodedMonument}`
  );

  if (!res.ok) {
    return { monumentData: null, decodedCity, decodedMonument };
  }

  const monumentData = await res.json();

  return { monumentData, decodedCity, decodedMonument };
}

export default async function MonumentPage({ params }) {
  const { city, monument } = await params;
  const { monumentData, decodedCity, decodedMonument } =
    await fetchMonumentData(city, monument);

  return (
    <MonumentContent
      monumentData={monumentData}
      city={decodedCity}
      monument={decodedMonument}
      styles={styles}
    />
  );
}
