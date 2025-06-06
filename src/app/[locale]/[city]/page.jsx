import data from "../../../../data/data.json";
import styles from "./page.module.css";
import CityContent from "../../../components/cityContent/CityContent";

export async function generateStaticParams() {
  const data = await import("../../../../data/data.json");

  const staticParams = data.Cities.map((city) => ({
    city: city.city.toLowerCase(),
  }));

  return staticParams;
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
