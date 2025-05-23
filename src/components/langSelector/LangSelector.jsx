"use client";

import Link from "next/link";
import Image from "next/image";
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
    dropdownRef,
  } = useDropdown();

  const pathSegments = pathname.split("/");
  const currentLocale = pathSegments[1];
  const nonLocalizedPath = `/${pathSegments.slice(2).join("/")}`;

  // Supported languages
  const locales = ["en", "es"];
  const flags = { en: "flags/en.svg", es: "flags/es.svg" };

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggleDropdown}
      ref={dropdownRef}
    >
      <p className={styles.dropdownButton}>🌍</p>
      <div
        className={`${styles.menu} ${isDropdownVisible ? styles.menuOpen : styles.menuClosed}`}
      >
        {locales.map((locale) => (
          <Link
            key={locale}
            href={`/${locale}${nonLocalizedPath}`}
            className={`${styles.dropdownLink} ${locale === currentLocale ? styles.disabledLink : ""}`}
          >
            {/* <span className={styles.flag}>{flags[locale]}</span> */}
            <div className={styles.flag}>
              <Image
                src={flags[locale]}
                alt={locale}
                fill
                className={
                  locale === currentLocale
                    ? styles.disabledLink
                    : styles.enabledLink
                }
                sizes="20px"
              />
            </div>
            {locale.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}
