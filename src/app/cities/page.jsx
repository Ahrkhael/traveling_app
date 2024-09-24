import Image from "next/image";
import Link from "next/link";
import citiesData from "../../../data/data.json";
import styles from "./page.module.css";

const Cities = () => {
  const cities = citiesData.Cities;

  return (
    <main className={styles.main}>
      <h1 className="title">Cities page</h1>
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
              <h2 className="title">{city.city}</h2>
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
};

export default Cities;
