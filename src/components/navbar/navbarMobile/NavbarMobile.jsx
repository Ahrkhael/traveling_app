"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import styles from "./NavbarMobile.module.css";
import { useTranslations } from "next-intl";
import LangSelector from "../../langSelector/LangSelector";
import useDropdown from "../../../hooks/useDropdown";

export default function NavbarMobile() {
  const { isDropdownVisible, handleToggleDropdown, dropdownRef } =
    useDropdown();
  const t = useTranslations("Navbar");

  return (
    <nav className={styles.nav}>
      <div className={styles.divButtons}>
        <button
          className={styles.menuButton}
          onClick={handleToggleDropdown}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <LangSelector />
      </div>

      {/* Contenedor del menú desplegable */}
      <div
        className={`${styles.menu} ${isDropdownVisible ? styles.menuOpen : styles.menuClosed}`}
        ref={dropdownRef}
      >
        <Link href="/" className={styles.link} onClick={handleToggleDropdown}>
          {t("Home")}
        </Link>
        <Link
          href="/cities"
          className={styles.link}
          onClick={handleToggleDropdown}
        >
          {t("Cities")}
        </Link>
        <Link
          href="/about-us"
          className={styles.link}
          onClick={handleToggleDropdown}
        >
          {t("AboutUs")}
        </Link>
      </div>
    </nav>
  );
}
