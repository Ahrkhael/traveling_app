import Link from "next/link";
import styles from "./DropdownMenuCities.module.css";
import citiesData from "../../../data/data.json";

export default function DropdownMenuCities() {
  return (
    <div className={styles.dropdown}>
      <Link href={"/cities"} className={styles.dropdownButton}>
        Ciudades
      </Link>
      <div className={styles.dropdownContent}>
        {citiesData.Cities.map((city) => (
          <Link
            key={city.city}
            href={`/${city.city}`}
            className={styles.dropdownLink}
          >
            {city.city}
          </Link>
        ))}
      </div>
    </div>
  );
}
