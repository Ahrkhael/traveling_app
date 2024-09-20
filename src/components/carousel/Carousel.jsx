"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Carousel.module.css";

export default function Carousel({ cities }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? cities.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === cities.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>¿No sabes qué destino elegir?</h2>
      <p className={styles.carouselTitleDescription}>
        Permítenos sugerirte algunas ciudades
      </p>
      <div className={styles.carousel}>
        <ul
          className={styles.carouselList}
          style={{ transform: `translateX(-${currentIndex * 300}px)` }} // 300px es el ancho de cada item
        >
          {cities.map((city) => (
            <li key={city.city} className={styles.carouselItem}>
              <Link href={`/${city.city}`}>
                <Image
                  src={city.image}
                  width={200}
                  height={200}
                  alt={`Foto de la ciudad de ${city.city}`}
                  className={styles.img}
                />
                <h3 className={styles.cityTitle}>{city.city}</h3>
                <p className={styles.cityDescription}>
                  {city.description || "Una ciudad maravillosa para visitar."}
                </p>
              </Link>{" "}
            </li>
          ))}
        </ul>

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
