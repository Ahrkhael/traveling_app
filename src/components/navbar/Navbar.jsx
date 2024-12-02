import { Link } from "@/i18n/routing";
import Image from "next/image";
import styles from "./Navbar.module.css";
import DropdownMenuCities from "../dropdownMenuCities/DropdownMenuCities";
import { useTranslations } from "next-intl";

export default function Navbar({}) {
  const t = useTranslations("Navbar");

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            src="/images/airplane.jpg"
            width={20}
            height={20}
            alt="traveling_app logo"
            className={styles.img}
          />
        </Link>
        <Link href="/" className={styles.link}>
          {t("Home")}
        </Link>
        <DropdownMenuCities t={t} />
        <Link href="/about-us" className={styles.link}>
          {t("AboutUs")}
        </Link>
      </nav>
    </header>
  );
}
