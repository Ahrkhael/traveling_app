import styles from "./page.module.css";
// import data from "../../../data/data.json";
import Carousel from "../../components/carousel/Carousel";
import TestimonySection from "../../components/testimonyList/TestimonySection";
import { useTranslations } from "next-intl";

// const cities = data.Cities;

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <main className="main">
      <div className={styles.div}>
        <h2 className="title">{t("WelcomeTitle")}</h2>
        <p className={`description ${styles.description}`}>
          {t("WelcomeDescription")}
        </p>
      </div>

      <Carousel
        title={t("CarrouselTitle")}
        titleDescription={t("CarrouselSubtitle")}
      />

      <TestimonySection
        title={t("TestimoniesTitle")}
        titleStyles={"title"}
        divStyles={styles.div}
        listStyles={styles.list}
        listItemStyles={styles.listItem}
        listItemTitleStyles={`title ${styles.titleTestimonies}`}
        descriptionStyles={"description"}
      />
    </main>
  );
}
