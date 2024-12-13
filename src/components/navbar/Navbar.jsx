import styles from "./Navbar.module.css";
import NavbarDeskstop from "./navbarDesktop/NavbarDesktop";
import NavbarMobile from "./navbarMobile/NavbarMobile";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <NavbarDeskstop />
      <NavbarMobile />
    </header>
  );
}
