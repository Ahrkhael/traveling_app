import TestimonySection from "../../../components/testimonyList/TestimonySection";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const t = await getTranslations({
    locale: locale,
    namespace: "Metadata",
  });

  return {
    title: t("AboutTitle"),
    description: t("AboutDescription"),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/about-us`,
      languages: {
        en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/about-us`,
        es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/about-us`,
      },
    },
    openGraph: {
      title: t("AboutTitle"),
      description: t("AboutDescription"),
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/about-us`,
      siteName: t("Title"),
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/preview-image.png`,
          width: 995,
          height: 413,
          alt: t("Title"),
        },
      ],
      locale: "en",
      alternateLocale: "es",
      type: "website",
    },
  };
}

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
