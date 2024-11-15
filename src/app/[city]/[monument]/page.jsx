import monumentsData from "../../../../data/data.json";
import Image from "next/image";
import styles from "./page.module.css";

export default function MonumentPage({ params }) {
  const { city, monument } = params;

  // Decodificar los parámetros para manejar los espacios y caracteres especiales
  const decodedCity = decodeURIComponent(city).toLowerCase();
  const decodedMonument = decodeURIComponent(monument).toLowerCase();

  // Buscar la ciudad dentro del array Cities
  const cityData = monumentsData.Cities.find(
    (item) => item.city.toLowerCase() === decodedCity
  );

  // Si se encuentra la ciudad, buscar el monumento dentro de los monumentos de esa ciudad
  const monumentData = cityData
    ? cityData.monuments.find(
        (item) => item.monument.toLowerCase() === decodedMonument
      )
    : null;

  // Si no se encuentra el monumento o la ciudad, mostrar un mensaje de error
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
