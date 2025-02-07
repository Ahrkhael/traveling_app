import { useTranslations } from "next-intl";
import styles from "./page.module.css";

export default function PrivacyPage() {
  const t = useTranslations("Privacy");

  return (
    <main className="main">
      <h1 className={styles.title}>{t("TitlePage")}</h1>

      <section className={styles.sections}>
        <h2 className={styles.description}>1. {t("Introduction")}</h2>
        <p className={styles.description}>
          {t.rich("IntroductionDescription", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </section>

      <section className={styles.sections}>
        <h2 className={styles.description}>2. {t("SavedInfo")}</h2>
        <p className={styles.description}>{t("SavedInfoDescription")}</p>
        <ul className={styles.description}>
          {t.rich("SavedInfoList", {
            li: (chunks) => <li>{chunks}</li>,
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </ul>
      </section>

      <section className={styles.sections}>
        <h2 className={styles.description}>3. {t("UseInfo")}</h2>
        <p className={styles.description}>{t("UseInfoDescription")}</p>
        <ul className={styles.description}>
          {t.rich("UseInfoList", {
            li: (chunks) => <li>{chunks}</li>,
          })}
        </ul>
      </section>

      <section className={styles.sections}>
        <h2 className={styles.description}>4. {t("ShareInfo")}</h2>
        <p className={styles.description}>{t("ShareInfoDescription")}</p>
        <ul className={styles.description}>
          {t.rich("ShareInfoList", {
            li: (chunks) => <li>{chunks}</li>,
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </ul>
      </section>

      <section className={styles.sections}>
        <h2 className={styles.description}>5. {t("UserRights")}</h2>
        <p className={styles.description}>{t("UserRightsDescription")}</p>
        <ul className={styles.description}>
          {t.rich("UserRightsList", {
            li: (chunks) => <li>{chunks}</li>,
          })}
        </ul>
        <p className={styles.description}>
          {t("UserRightsContact")}
          <a href="mailto:mail@viajerossinfronteras.com">
            mail@viajerossinfronteras.com
          </a>
          .
        </p>
      </section>

      <section className={styles.sections}>
        <h2 className={styles.description}>6. {t("PolicyChanges")}</h2>
        <p className={styles.description}>{t("PolicyChangesDescription")}</p>
      </section>
    </main>
  );
}
