import { useTranslations } from "next-intl";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>{t("Explore")}</h4>
          <ul>
            <li>
              <Link href="/" className={styles.link}>
                {t("Home")}
              </Link>
            </li>
            <li>
              <Link href="/cities" className={styles.link}>
                {t("Cities")}
              </Link>
            </li>
            <li>
              <Link href="/about-us" className={styles.link}>
                {t("AboutUs")}
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>{t("FollowUs")}</h4>
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
          <h4>{t("Contact")}</h4>
          <p>correo@viajerossinfronteras.com</p>
        </div>

        <div className={styles.section}>
          <h4>{t("Subscribe")}</h4>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="example@mail.com" />
            <button type="submit">{t("SubscribeBotton")}</button>
          </form>
        </div>

        <div className={styles.section}>
          <h4>{t("LegalNotice")}</h4>
          <p>
            <Link href="/terms" className={styles.link}>
              {t("Terms&Conditions")}
            </Link>
          </p>
          <p>
            <Link href="/privacy" className={styles.link}>
              {t("PrivacyPolicy")}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
