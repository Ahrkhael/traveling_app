"use client";

import Link from "next/link";
import styles from "./LangSelector.module.css";
import useDropdown from "../../hooks/useDropdown";
import { usePathname } from "next/navigation";

export default function LangSelector() {
  const pathname = usePathname();
  const {
    isDropdownVisible,
    handleToggleDropdown,
    handleMouseEnter,
    handleMouseLeave,
  } = useDropdown();

  const pathSegments = pathname.split("/");
  const currentLocale = pathSegments[1];
  const nonLocalizedPath = `/${pathSegments.slice(2).join("/")}`;

  // Supported languages
  const locales = ["en", "es"];

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggleDropdown}
    >
      <p className={styles.dropdownButton}>🌍</p>
      <div
        className={`${styles.menu} ${isDropdownVisible ? styles.menuOpen : styles.menuClosed}`}
      >
        {locales.map((locale) => (
          <Link
            key={locale}
            href={`/${locale}${nonLocalizedPath}`}
            locale={locale}
            className={`${styles.dropdownLink} ${locale === currentLocale ? styles.disabledLink : ""}`}
          >
            <span
              className={
                locale === currentLocale ? styles.disabledLink : undefined
              }
            >
              {locale.toUpperCase()}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
