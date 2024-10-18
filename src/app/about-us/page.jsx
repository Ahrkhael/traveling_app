import styles from "./page.module.css";

const AboutUsPage = () => {
  return (
    <main className="main">
      <h1 className="title">¿Quiénes somos?</h1>
      <p className={`description ${styles.aboutUsDescription}`}>
        <span className={styles.boldText}>Viajeros Sin Fronteras</span> es una
        plataforma web diseñada para los amantes del turismo y la aventura. A
        través de una experiencia visual y dinámica, los usuarios pueden
        explorar destinos turísticos alrededor del mundo, descubriendo ciudades
        fascinantes y sus monumentos más emblemáticos. La web permite a los
        viajeros informarse sobre las características culturales, históricas y
        naturales de cada lugar, brindando detalles de interés sobre los sitios
        más icónicos. Con un enfoque en la facilidad de navegación y un diseño
        interactivo, Viajeros Sin Fronteras invita a los usuarios a planificar
        su próxima aventura, conectándolos con una diversidad de destinos
        globales sin importar fronteras.
      </p>
    </main>
  );
};

export default AboutUsPage;
