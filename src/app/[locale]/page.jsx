import styles from "./page.module.css";
import data from "../../../data/data.json";
import Carousel from "../../components/carousel/Carousel";
import TestimonyList from "../../components/testimonyList/TestimonyList";

const cities = data.Cities;
const testimonies = data.Testimonies;

export default function Home() {
  return (
    <main className="main">
      <div className={styles.div}>
        <h2 className="title">
          Bienvenidos a la web de Viajeros sin fronteras
        </h2>
        <p className={`description ${styles.description}`}>
          Tu web de viajes de confianza. Explora el mundo desde la comodidad de
          tu pantalla y descubre destinos inolvidables. Aquí te conectamos con
          ciudades vibrantes, monumentos históricos y maravillas naturales que
          esperan ser exploradas. Ya seas un aventurero en busca de nuevas
          experiencias o un curioso deseando conocer rincones únicos del
          planeta, esta es tu puerta de entrada al viaje de tus sueños.
          ¡Prepárate para inspirarte, planificar y explorar sin límites!
        </p>
      </div>

      <Carousel cities={cities} />

      <div className={styles.div}>
        <h1 className="title">Testimonios de otros viajeros como tú</h1>
        <TestimonyList
          testimonies={testimonies}
          listStyles={styles.list}
          listItemStyles={styles.listItem}
          titleStyles={"title"}
          descriptionStyles={"description"}
        />
      </div>
    </main>
  );
}
