import data from "../../../../data/data.json";
import styles from "./page.module.css";
import MonumentList from "../../../components/monumentList/MonumentList";

export async function generateStaticParams() {
  const data = await import("../../../../data/data.json");

  const staticParams = data.Cities.map((city) => ({
    city: city.city.toLowerCase(),
  }));

  return staticParams;
}

export default async function CityPage({ params }) {
  const city = (await params).city;
  const decodedCity = decodeURIComponent(city).toLowerCase();

  const cityData = data.Cities.find(
    (item) => item.city.toLowerCase() === decodedCity
  );

  const monuments = cityData ? cityData.monuments : [];

  if (!cityData) {
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
