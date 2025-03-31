import styles from "./page.module.css";
import CityContent from "../../../components/cityContent/CityContent";
//import data from "../../../../data/data.json";

// export async function generateStaticParams() {
//   const data = await import("../../../../data/data.json");

//   const staticParams = data.Cities.map((city) => ({
//     city: city.city.toLowerCase(),
//   }));

//   return staticParams;
// }

export async function generateStaticParams() {
  // Llama a tu backend para obtener la lista de ciudades.
  // Asegúrate de que la URL corresponda a tu entorno
  const res = await fetch("http://localhost:3001/api/v1/cities/names");

  if (!res.ok) {
    throw new Error("Error getting cities");
  }

  const cities = await res.json();

  // Mapea las ciudades para generar los parámetros necesarios
  const staticParams = cities.map((city) => ({
    city: city.toLowerCase(),
  }));

  return staticParams;
}

// Función para obtener los datos de la ciudad en el servidor
async function fetchCityData(city) {
  const decodedCity = decodeURIComponent(city);

  // Realiza la llamada al backend usando el nombre de la ciudad
  const res = await fetch(
    `http://localhost:3001/api/v1/cities/by_name/${decodedCity}`
  );

  if (!res.ok) {
    return { cityData: null, decodedCity };
  }

  const cityData = await res.json();
  return { cityData, decodedCity };
}

export default async function CityPage({ params }) {
  const { city } = await params;
  const { cityData, decodedCity } = await fetchCityData(city);

  return <CityContent cityData={cityData} city={decodedCity} styles={styles} />;
}
