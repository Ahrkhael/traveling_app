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
    dropdownRef,
  } = useDropdown();

  return (
    <div
      ref={dropdownRef}
      className={styles.dropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggleDropdown}
    >
      <Link href={"/cities"} className={styles.dropdownButton}>
        {title}
      </Link>
      <div
        className={`${styles.menu} ${isDropdownVisible ? styles.menuOpen : styles.menuClosed}`}
      >
        {cities.map((city) => (
          <Link
            key={city.id}
            href={`/${city.name}`}
            className={styles.dropdownLink}
          >
            {city.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
