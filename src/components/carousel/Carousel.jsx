"use client";

import { useState, useEffect } from "react";
import CityList from "../cityList/CityList";
import styles from "./Carousel.module.css";
import { useTranslations } from "next-intl";

export default function Carousel({ title, titleDescription, cities }) {
  const t = useTranslations("Cities");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemDisplacement, setItemDisplacement] = useState(450); // Desplazamiento inicial

  useEffect(() => {
    const updateItemWidth = () => {
      if (window.innerWidth <= 768) {
        setItemDisplacement(280); // En móviles
      } else {
        setItemDisplacement(450); // En pantallas grandes
      }
    };

    // Detecta el tamaño inicial
    updateItemWidth();

    // Escucha cuando cambia el tamaño de la pantalla
    window.addEventListener("resize", updateItemWidth);

    // Limpia el evento cuando el componente se desmonte
    return () => window.removeEventListener("resize", updateItemWidth);
  }, []);

  const handlePrevClick = () => {
    let newIndex;
    if (window.innerWidth <= 768) {
      newIndex = currentIndex === 0 ? cities.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === 0 ? cities.length - 3 : currentIndex - 1;
    }
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    let newIndex;
    if (window.innerWidth <= 768) {
      newIndex = currentIndex === cities.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === cities.length - 3 ? 0 : currentIndex + 1;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <div className={`section ${styles.carouselContainer}`}>
      <h2 className={`${styles.carouselTitle}`}>{title}</h2>
      <p className={`description ${styles.carouselTitleDescription}`}>
        {titleDescription}
      </p>
      <div className={styles.carousel}>
        <button
          className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
          onClick={handlePrevClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="24px"
            height="24px"
          >
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        <div
          className={styles.carouselList}
          style={{
            transform: `translateX(-${currentIndex * itemDisplacement}px)`,
          }}
        >
          <CityList
            cities={cities}
            listStyles={styles.carouselList}
            listItemStyles={styles.carouselItem}
            imgStyles={styles.img}
            titleStyles={styles.cityTitle}
            descriptionStyles={styles.cityDescription}
            t={t}
          />
        </div>
        <button
          className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
          onClick={handleNextClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="24px"
            height="24px"
          >
            <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
