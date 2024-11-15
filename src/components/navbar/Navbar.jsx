import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import DropdownMenuCities from "../dropdownMenuCities/DropdownMenuCities";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            src="/airplane.jpg"
            width={20}
            height={20}
            alt="traveling_app logo"
            className={styles.img}
          />
        </Link>
        <Link href="/" className={styles.link}>
          Inicio
        </Link>
        <DropdownMenuCities />
        <Link href="/about-us" className={styles.link}>
          ¿Quiénes somos?
        </Link>
      </nav>
    </header>
  );
}
