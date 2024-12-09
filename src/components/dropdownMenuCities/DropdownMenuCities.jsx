import { Link } from "@/i18n/routing";
import styles from "./DropdownMenuCities.module.css";
import citiesData from "../../../data/data.json";

export default function DropdownMenuCities({ t }) {
  return (
    <div className={styles.dropdown}>
      <Link href={"/cities"} className={styles.dropdownButton}>
        {t("Cities")}
      </Link>
      <div className={styles.dropdownContentWrapper}>
        <div className={styles.dropdownContent}>
          {citiesData.Cities.map((city) => (
            <Link
              key={city.id}
              href={`/${city.city}`}
              className={styles.dropdownLink}
            >
              {city.city}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
