import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Suspense } from "react";
import styles from "./CityList.module.css";

const CityList = ({
  cities,
  listStyles,
  listItemStyles,
  imgStyles,
  titleStyles,
  descriptionStyles,
  t,
}) => {
  return (
    <ul className={listStyles}>
      {cities.map((city) => (
        <li key={city.id} className={listItemStyles}>
          <Link href={`/${city.city}`} style={{ height: "100%" }}>
            <Suspense fallback="<p>Loading image...</p>">
              <div className={styles.imageWrapper}>
                <Image
                  src={city.image}
                  alt={`Foto de la ciudad de ${city.city}`}
                  fill
                  placeholder="blur"
                  blurDataURL={city.blurDataURL}
                  sizes="(max-width: 768px) 100dvw, (max-width: 1200px) 28dvh, 28dvh"
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                  className={imgStyles}
                />
              </div>
            </Suspense>
            <h2 className={titleStyles}>{city.city}</h2>
            <p className={descriptionStyles}>
              {t(`${city.city}.shortDescription`) ||
                "Una ciudad maravillosa para visitar."}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CityList;
