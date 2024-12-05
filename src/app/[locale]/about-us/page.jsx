import TestimonyList from "../../../components/testimonyList/TestimonyList";
import data from "../../../../data/data.json";
import styles from "./page.module.css";

const AboutUsPage = () => {
  const testimonyData = data.Testimonies;
  return (
    <main className="main">
      <div className={styles.div}>
        <h1 className="title">¿Quiénes somos?</h1>
        <p className={`description ${styles.aboutUsDescription}`}>
          <span className={styles.boldText}>Viajeros Sin Fronteras</span> es una
          plataforma web diseñada para los amantes del turismo y la aventura. A
          través de una experiencia visual y dinámica, los usuarios pueden
          explorar destinos turísticos alrededor del mundo, descubriendo
          ciudades fascinantes y sus monumentos más emblemáticos. La web permite
          a los viajeros informarse sobre las características culturales,
          históricas y naturales de cada lugar, brindando detalles de interés
          sobre los sitios más icónicos. Con un enfoque en la facilidad de
          navegación y un diseño interactivo, Viajeros Sin Fronteras invita a
          los usuarios a planificar su próxima aventura, conectándolos con una
          diversidad de destinos globales sin importar fronteras.
        </p>
      </div>
      <div className={styles.div}>
        <h1 className="title">Conoce las experiencias de nuestros usuarios</h1>
        <TestimonyList
          testimonies={testimonyData}
          listStyles={styles.list}
          listItemStyles={styles.listItem}
          titleStyles={styles.titleTestimonies}
          descriptionStyles={"description"}
        />
      </div>
    </main>
  );
};

export default AboutUsPage;
