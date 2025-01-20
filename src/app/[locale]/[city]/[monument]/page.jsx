import data from "../../../../../data/data.json";
import styles from "./page.module.css";
import MonumentContent from "../../../../components/monumentContent/monumentContent";

export async function generateStaticParams() {
  const data = await import("../../../../../data/data.json");

  const staticParams = data.Cities.flatMap((city) =>
    city.monuments.map((monument) => ({
      city: city.city.toLowerCase(),
      monument: monument.monument.toLowerCase(),
    }))
  );

  return staticParams;
}

async function fetchMonumentData(city, monument) {
  const decodedCity = decodeURIComponent(city);
  const decodedMonument = decodeURIComponent(monument);

  const cityData = data.Cities.find(
    (item) => item.city.toLowerCase() === decodedCity.toLowerCase()
  );

  const monumentData = cityData
    ? cityData.monuments.find(
        (item) => item.monument.toLowerCase() === decodedMonument.toLowerCase()
      )
    : null;

  const res = await fetch(
    `http://localhost:3000/api/placeholder?imagePath=${encodeURIComponent(monumentData.image)}`
  );
  const { base64 } = await res.json();

  return { monumentData, base64, decodedCity, decodedMonument };
}

export default async function MonumentPage({ params }) {
  const { city, monument } = await params;
  const { monumentData, base64, decodedCity, decodedMonument } =
    await fetchMonumentData(city, monument);

  return (
    <MonumentContent
      monumentData={monumentData}
      base64ImagePlaceholder={base64}
      city={decodedCity}
      monument={decodedMonument}
      styles={styles}
    />
  );
}
