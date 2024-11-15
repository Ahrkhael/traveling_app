import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>Explora</h4>
          <ul>
            <li>
              <Link href="/" className={styles.link}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/cities" className={styles.link}>
                Ciudades
              </Link>
            </li>
            <li>
              <Link href="/about-us" className={styles.link}>
                Acerca de <br /> Nosotros
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Síguenos</h4>
          <ul className={styles.socials}>
            <li>
              <Link href="https://instagram.com" className={styles.link}>
                Instagram
              </Link>
            </li>
            <li>
              <Link href="https://facebook.com" className={styles.link}>
                Facebook
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com" className={styles.link}>
                Twitter
              </Link>
            </li>
            <li>
              <Link href="https://youtube.com" className={styles.link}>
                YouTube
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Contacto</h4>
          <p>correo@viajerossinfronteras.com</p>
        </div>

        <div className={styles.section}>
          <h4>Suscríbete</h4>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="example@mail.com" />
            <button type="submit">Suscribirse</button>
          </form>
        </div>

        <div className={styles.section}>
          <h4>Aviso legal</h4>
          <p>
            <Link href="/terms" className={styles.link}>
              Términos y Condiciones
            </Link>
          </p>
          <p>
            <Link href="/privacy" className={styles.link}>
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
