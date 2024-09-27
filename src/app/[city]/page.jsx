import monumentsData from "../../../data/data.json";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function CityPage({ params }) {
  const { city } = params;

  // Decodificar los parámetros para manejar los espacios y caracteres especiales
  const decodedCity = decodeURIComponent(city).toLowerCase();

  // Buscar la ciudad dentro del array Cities
  const cityData = monumentsData.Cities.find(
    (item) => item.city.toLowerCase() === decodedCity
  );

  // Si se encuentra la ciudad, obtener sus monumentos; si no, usar un array vacío
  const monuments = cityData ? cityData.monuments : [];

  return (
    <main className="main">
      <h1 className="title">Monumentos en {city}</h1>
      <ul className={styles.list}>
        {monuments.map((monument) => (
          <li key={monument.monument}>
            <Link href={`/${city}/${monument.monument}`}>
              <Image
                src={monument.image}
                width={200}
                height={200}
                alt={`Foto del monumento ${monument.monument}`}
                className={styles.img}
              />
              <h2 className="title">{monument.monument}</h2>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Link>{" "}
          </li>
        ))}
      </ul>
    </main>
  );
}
