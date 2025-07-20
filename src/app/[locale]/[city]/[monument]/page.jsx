import data from "../../../../../data/data.json";
import styles from "./page.module.css";
import MonumentContent from "../../../../components/monumentContent/monumentContent";
import { getTranslations } from "next-intl/server";

export async function generateStaticParams() {
  const data = await import("../../../../../data/data.json");

  const staticParams = data.Cities.flatMap((city) =>
    city.monuments.map((monument) => ({
      city: city.city.toLowerCase(),
      monument: monument.monument.toLowerCase(),
    }))
  );

  return staticParams;
}

export async function generateMetadata({ params }) {
  const { locale, city, monument } = await params;
  const decodedCity = decodeURIComponent(city);
  const decodedMonument = decodeURIComponent(monument);

  const t = await getTranslations({
    locale: locale,
    namespace: "Metadata",
  });

  return {
    title: t(`Monuments.${decodedMonument}.Name`),
    description: t(`Monuments.${decodedMonument}.Description`),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/${decodedCity}/${decodedMonument}`,
      languages: {
        en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/${decodedCity}/${decodedMonument}`,
        es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/${decodedCity}/${decodedMonument}`,
      },
    },
    openGraph: {
      title: t(`Monuments.${decodedMonument}.Name`),
      description: t(`Monuments.${decodedMonument}.Description`),
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/${decodedCity}/${decodedMonument}`,
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

async function fetchMonumentData(city, monument) {
  const decodedCity = decodeURIComponent(city);
  const decodedMonument = decodeURIComponent(monument);

  const cityData = data.Cities.find(
    (item) => item.city.toLowerCase() === decodedCity.toLowerCase()
  );

  const monumentData = cityData
    ? cityData.monuments.find(
        (item) => item.monument.toLowerCase() === decodedMonument.toLowerCase()
      )
    : null;

  return { monumentData, decodedCity, decodedMonument };
}

export default async function MonumentPage({ params }) {
  const { city, monument } = await params;
  const { monumentData, decodedCity, decodedMonument } =
    await fetchMonumentData(city, monument);

  return (
    <MonumentContent
      monumentData={monumentData}
      city={decodedCity}
      decodedMonument={decodedMonument}
      styles={styles}
    />
  );
}
