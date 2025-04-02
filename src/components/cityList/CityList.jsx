import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Suspense } from "react";
import styles from "./CityList.module.css";

export default function CityList({
  cities,
  listStyles,
  listItemStyles,
  imgStyles,
  titleStyles,
  descriptionStyles,
  t,
}) {
  return (
    <ul className={listStyles}>
      {cities.map((city) => (
        <li key={city.id} className={listItemStyles}>
          <Link href={`/${city.name}`} style={{ height: "100%" }}>
            <Suspense fallback="<p>Loading image...</p>">
              <div className={styles.imageWrapper}>
                <Image
                  src={city.image_url}
                  alt={`Foto de la ciudad de ${city.name}`}
                  fill
                  placeholder="blur"
                  blurDataURL={city.blur_data_url}
                  sizes="(max-width: 768px) 90dvw, (max-width: 1200px) 28dvh, 28dvh"
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                  className={imgStyles}
                />
              </div>
            </Suspense>
            <h2 className={titleStyles}>{city.name}</h2>
            <p className={descriptionStyles}>
              {t(`${city.name}.shortDescription`)}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
