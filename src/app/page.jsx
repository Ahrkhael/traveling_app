import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import citiesData from "../../data/data.json";

const cities = citiesData.Cities;

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>
        Bienvenidos a la web de Viajeros sin fronteras
      </h2>
      <p className={styles.description}>Tu web de viajes de confianza</p>
      <ul className={styles.list}>
        {cities.map((city) => (
          <li key={city.city}>
            <Link href={`/${city.city}`}>
              <Image
                src={city.image}
                width={200}
                height={200}
                alt={`Foto de la ciudad de ${city.city}`}
                className={styles.img}
              />
              <h2>{city.city}</h2>
              <p>
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
