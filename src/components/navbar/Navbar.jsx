import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

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
        <Link href="/cities" className={styles.link}>
          Ciudades
        </Link>
        <Link href="/testimonies" className={styles.link}>
          Testimonios
        </Link>
        <Link href="/about-us" className={styles.link}>
          ¿Quiénes somos?
        </Link>
      </nav>
    </header>
  );
}
