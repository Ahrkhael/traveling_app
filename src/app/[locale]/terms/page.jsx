import { useTranslations } from "next-intl";
import styles from "./page.module.css";

export default function TermsPage() {
  const t = useTranslations("Terms");

  return (
    <main className="main">
      <h1 className={`title ${styles.title}`}>{t("TitlePage")}</h1>

      <section className={styles.sections}>
        <h2 className={styles.description}>1. {t("Introduction")}</h2>
        <p className={styles.description}>
          {t.rich("IntroductionDescription", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </section>

      <section className={styles.sections}>
        <h2 className={styles.description}>2. {t("UseSite")}</h2>
        <p className={styles.description}>{t("UseSiteDescription")}</p>
        <ul className={styles.description}>
          {t.rich("UseSiteList", { li: (chunks) => <li>{chunks}</li> })}
        </ul>
      </section>

      <section className={styles.sections}>
        <h2 className={styles.description}>3. {t("IntelectualProperty")}</h2>
        <p className={styles.description}>
          {t.rich("IntelectualPropertyDescription", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </section>

      <section className={styles.sections}>
        <h2 className={styles.description}>4. {t("UserResponsability")}</h2>
        <p className={styles.description}>
          {t("UserResponsabilityDescription")}
        </p>
      </section>

      <section className={styles.sections}>
        <h2 className={styles.description}>5. {t("LinkThirdParties")}</h2>
        <p className={styles.description}>{t("LinkThirdPartiesDescription")}</p>
      </section>

      <section className={styles.sections}>
        <h2 className={styles.description}>6. {t("LiabilityLimitation")}</h2>
        <p className={styles.description}>
          {t("LiabilityLimitationDescription")}
        </p>
      </section>

      <section className={styles.sections}>
        <h2 className={styles.description}>7. {t("TermsChanges")}</h2>
        <p className={styles.description}>{t("TermsChangesDescription")}</p>
      </section>

      <section className={styles.sections}>
        <h2 className={styles.description}>8. {t("Contact")}</h2>
        <p className={styles.description}>
          {t("ContactDescription")}
          <a href="mailto:mail@viajerossinfronteras.com">
            mail@viajerossinfronteras.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
