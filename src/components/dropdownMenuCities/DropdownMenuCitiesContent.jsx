"use client";

import { Link } from "@/i18n/routing";
import styles from "./DropdownMenuCities.module.css";
import useDropdown from "../../hooks/useDropdown";

export default function DropdownMenuCitiesContent({ title, cities }) {
  const {
    isDropdownVisible,
    handleToggleDropdown,
    handleMouseEnter,
    handleMouseLeave,
  } = useDropdown();

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggleDropdown}
    >
      <Link href={"/cities"} className={styles.dropdownButton}>
        {title}
      </Link>
      {isDropdownVisible && (
        <div className={styles.dropdownContentWrapper}>
          <div className={styles.dropdownContent}>
            {cities.map((city) => (
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
      )}
    </div>
  );
}
