import monumentsData from "../../../data/data.json";
import styles from "./page.module.css";
import MonumentList from "../../components/monumentList/MonumentList";

export default async function CityPage({ params }) {
  const city = (await params).city;

  // Decodificar los parámetros para manejar los espacios y caracteres especiales
  const decodedCity = decodeURIComponent(city).toLowerCase();

  // Buscar la ciudad dentro del array Cities
  const cityData = monumentsData.Cities.find(
    (item) => item.city.toLowerCase() === decodedCity
  );

  // Si se encuentra la ciudad, obtener sus monumentos; si no, usar un array vacío
  const monuments = cityData ? cityData.monuments : [];

  // Si no se encuentran los monumentos o la ciudad, mostrar un mensaje de error
  if (cityData === undefined) {
    return (
      <main className="main">
        <p className="description">No se encontró la ciudad {decodedCity}.</p>
      </main>
    );
  }

  return (
    <main className="main">
      <div className={styles.divCity}>
        <h1 className="title">{city}</h1>
        <h2 className={`description ${styles.cityLongDescription}`}>
          {cityData.longDescription}
        </h2>
      </div>
      <div className={styles.divMonuments}>
        <h1 className="title">Monumentos en {city}</h1>
        <MonumentList
          city={city}
          monuments={monuments}
          listStyles={styles.list}
          imgStyles={styles.img}
          titleStyles={"title"}
          descriptionStyles={`description ${styles.monumentDescription}`}
        ></MonumentList>
      </div>
    </main>
  );
}
