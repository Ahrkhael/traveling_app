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
      decodedMonument={decodedMonument}
      styles={styles}
    />
  );
}
