import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>Explora</h4>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/cities">Ciudades</a>
            </li>
            <li>
              <a href="/about-us">
                Acerca de <br /> Nosotros
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Síguenos</h4>
          <ul className={styles.socials}>
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://youtube.com">YouTube</a>
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
            <input type="email" placeholder="Tu correo electrónico" />
            <button type="submit">Suscribirse</button>
          </form>
        </div>

        <div className={styles.section}>
          <h4>Aviso legal</h4>
          <p>
            <a href="/terms">Términos y Condiciones</a>
          </p>
          <p>
            <a href="/privacy">Política de Privacidad</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
