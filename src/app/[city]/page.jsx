import monumentsData from "../../../data/data.json";
import styles from "./page.module.css";
import MonumentList from "../../components/monumentList/MonumentList";

export default function CityPage({ params }) {
  const { city } = params;

  // Decodificar los parámetros para manejar los espacios y caracteres especiales
  const decodedCity = decodeURIComponent(city).toLowerCase();

  // Buscar la ciudad dentro del array Cities
  const cityData = monumentsData.Cities.find(
    (item) => item.city.toLowerCase() === decodedCity
  );

  // Si se encuentra la ciudad, obtener sus monumentos; si no, usar un array vacío
  const monuments = cityData ? cityData.monuments : [];

  return (
    <main className="main">
      <h1 className="title">Monumentos en {city}</h1>
      <MonumentList
        city={city}
        monuments={monuments}
        listStyles={styles.list}
        imgStyles={styles.img}
        titleStyles={"title"}
        descriptionStyles={"description"}
      ></MonumentList>
    </main>
  );
}
