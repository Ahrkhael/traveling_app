import data from "../../../../data/data.json";
import Image from "next/image";
import styles from "./page.module.css";

export async function generateStaticParams() {
  const data = await import("../../../../data/data.json");

  const staticParams = data.Cities.flatMap((city) =>
    city.monuments.map((monument) => ({
      city: city.city.toLowerCase(),
      monument: monument.monument.toLowerCase(),
    }))
  );

  return staticParams;
}

export default async function MonumentPage({ params }) {
  const { city, monument } = await params;
  const decodedCity = decodeURIComponent(city).toLowerCase();
  const decodedMonument = decodeURIComponent(monument).toLowerCase();

  const cityData = data.Cities.find(
    (item) => item.city.toLowerCase() === decodedCity
  );

  const monumentData = cityData
    ? cityData.monuments.find(
        (item) => item.monument.toLowerCase() === decodedMonument
      )
    : null;

  if (!monumentData) {
    return (
      <main className="main">
        No se encontró el monumento {decodedMonument} en {decodedCity}.
      </main>
    );
  }

  return (
    <main className={`main ${styles.main}`}>
      <Image
        src={monumentData.image}
        width={200}
        height={200}
        alt={`Foto del monumento ${monumentData.monument}`}
        className={styles.img}
      />
      <h1 className="title">
        {monumentData.monument} de {cityData.city}
      </h1>
      <p className={`description ${styles.monumentDescription}`}>
        {monumentData.longDescription}
      </p>
    </main>
  );
}
