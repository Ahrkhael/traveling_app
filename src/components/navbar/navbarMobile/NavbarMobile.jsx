"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import styles from "./NavbarMobile.module.css";
import { useTranslations } from "next-intl";
import LangSelector from "../../langSelector/LangSelector";

export default function NavbarMobile() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("Navbar");

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.divButtons}>
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <LangSelector />
      </div>

      {/* Contenedor del menú desplegable */}
      <div
        className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : styles.menuClosed}`}
      >
        <Link
          href="/"
          className={styles.link}
          onClick={() => setMenuOpen(false)}
        >
          {t("Home")}
        </Link>
        <Link
          href="/cities"
          className={styles.link}
          onClick={() => setMenuOpen(false)}
        >
          {t("Cities")}
        </Link>
        <Link
          href="/about-us"
          className={styles.link}
          onClick={() => setMenuOpen(false)}
        >
          {t("AboutUs")}
        </Link>
      </div>
    </nav>
  );
}
