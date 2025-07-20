import CityList from "@/components/cityList/CityList";
import citiesData from "../../../../data/data.json";
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
    title: t("CitiesTitle"),
    description: t("CitiesDescription"),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/cities`,
      languages: {
        en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/cities`,
        es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/cities`,
      },
    },
    openGraph: {
      title: t("CitiesTitle"),
      description: t("CitiesDescription"),
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/cities`,
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

const CitiesPage = () => {
  const t = useTranslations("Cities");
  const cities = citiesData.Cities;

  return (
    <main className="main">
      <h1 className="title">{t("CitiesPageTitle")}</h1>
      <CityList
        cities={cities}
        listStyles={styles.list}
        listItemStyles={styles.listItem}
        imgStyles={styles.img}
        titleStyles={"title"}
        descriptionStyles={"description"}
        t={t}
      />
    </main>
  );
};

export default CitiesPage;
