import { Link } from "@/i18n/routing";
import Image from "next/image";
import styles from "./NavbarDesktop.module.css";
import { useTranslations } from "next-intl";
import DropdownMenuCities from "../../dropdownMenuCities/DropdownMenuCities";
import LangSelector from "../../langSelector/LangSelector";

export default function NavbarDeskstop() {
  const t = useTranslations("Navbar");

  return (
    <nav className={styles.nav}>
      <div className={styles.divButtons}>
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
        <LangSelector />
      </div>
    </nav>
  );
}
