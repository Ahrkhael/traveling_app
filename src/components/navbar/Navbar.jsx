import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Image
          src="/airplane.jpg"
          width={20}
          height={20}
          alt="traveling_app logo"
          className={styles.img}
        />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/cities" className={styles.link}>
          Cities
        </Link>
        <Link href="/about-us" className={styles.link}>
          About us
        </Link>
      </nav>
    </header>
  );
}
