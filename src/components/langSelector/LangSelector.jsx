"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import styles from "./LangSelector.module.css";

export default function LangSelector() {
  const pathname = usePathname();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const pathSegments = pathname.split("/");
  const currentLocale = pathSegments[1];
  const nonLocalizedPath = `/${pathSegments.slice(2).join("/")}`;

  // Define los idiomas soportados
  const locales = ["en", "es"];

  const handleMouseEnter = () => setDropdownVisible(true);
  const handleMouseLeave = () => setDropdownVisible(false);

  // Crea enlaces para cambiar de idioma
  return (
    <div
      className={styles.dropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className={styles.dropdownButton}>🌍</p>
      {isDropdownVisible && (
        <div className={styles.dropdownContentWrapper}>
          <div className={styles.dropdownContent}>
            {locales.map((locale) => (
              <Link
                key={locale}
                href={`/${locale}${nonLocalizedPath}`}
                locale={locale}
                className={`${styles.dropdownLink} ${locale === currentLocale ? styles.disabled : ""}`}
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
      )}
    </div>
  );
}
