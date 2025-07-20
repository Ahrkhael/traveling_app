import data from "../../../../data/data.json";
import styles from "./page.module.css";
import CityContent from "../../../components/cityContent/CityContent";
import { getTranslations } from "next-intl/server";

export async function generateStaticParams() {
  const data = await import("../../../../data/data.json");

  const staticParams = data.Cities.map((city) => ({
    city: city.city.toLowerCase(),
  }));

  return staticParams;
}

export async function generateMetadata({ params }) {
  const { locale, city } = await params;

  const t = await getTranslations({
    locale: locale,
    namespace: "Metadata",
  });

  return {
    title: t(`Cities.${city}.Name`),
    description: t(`Cities.${city}.Description`),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/${city}`,
      languages: {
        en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/${city}`,
        es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/${city}`,
      },
    },
    openGraph: {
      title: t(`Cities.${city}.Name`),
      description: t(`Cities.${city}.Description`),
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/${city}`,
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

// Función para obtener los datos de la ciudad en el servidor
async function fetchCityData(city) {
  const decodedCity = decodeURIComponent(city).toLowerCase();

  const cityData = data.Cities.find(
    (item) => item.city.toLowerCase() === decodedCity
  );

  return { cityData, decodedCity };
}

// Componente de renderizado principal
export default async function CityPage({ params }) {
  const { city } = await params;
  const { cityData, decodedCity } = await fetchCityData(city);

  return <CityContent cityData={cityData} city={decodedCity} styles={styles} />;
}
