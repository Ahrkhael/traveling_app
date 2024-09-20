import styles from "./page.module.css";
import citiesData from "../../data/data.json";
import Carousel from "../components/carousel/Carousel";

const cities = citiesData.Cities;

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <h2 className={styles.title}>
          Bienvenidos a la web de Viajeros sin fronteras
        </h2>
        <p className={styles.description}>Tu web de viajes de confianza</p>
      </div>

      <Carousel cities={cities} />
    </main>
  );
}
