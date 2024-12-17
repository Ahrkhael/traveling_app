import TestimonySection from "../../../components/testimonyList/TestimonySection";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";

const AboutUsPage = () => {
  const t = useTranslations("AboutUsPage");

  return (
    <main className="main">
      <div className={styles.div}>
        <h1 className="title">{t("MainTitle")}</h1>
        <p className={`description ${styles.aboutUsDescription}`}>
          <span className={styles.boldText}>Viajeros Sin Fronteras</span>
          {t("MainDescription")}
        </p>
      </div>
      <TestimonySection
        title={t("TestimoniesTitle")}
        divStyles={styles.div}
        titleStyles={"title"}
        listStyles={styles.list}
        listItemStyles={styles.listItem}
        listItemTitleStyles={`title ${styles.titleTestimonies}`}
        descriptionStyles={"description"}
      />
    </main>
  );
};

export default AboutUsPage;
