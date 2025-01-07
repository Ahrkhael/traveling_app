import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Suspense } from "react";
import styles from "./MonumentList.module.css";

export default function MonumentList({
  city,
  monuments,
  listStyles,
  listItemStyles,
  imgStyles,
  titleStyles,
  descriptionStyles,
}) {
  const t = useTranslations(`Cities.${city}.monuments`);
  return (
    <ul className={listStyles}>
      {monuments.map((monument) => (
        <li key={monument.id} className={listItemStyles}>
          <Link
            href={`/${city}/${monument.monument}`}
            style={{ height: "100%" }}
          >
            <Suspense>
              <div className={styles.imageWrapper}>
                <Image
                  src={monument.image}
                  alt={`Foto del monumento ${monument.monument}`}
                  fill
                  sizes="(max-width: 768px) 100dvw, (max-width: 1200px) 28dvh, 28dvh"
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                  className={imgStyles}
                />
              </div>
              <h2 className={titleStyles}>
                {t(`${monument.monument}.monument`)}
              </h2>
              <p className={descriptionStyles}>
                {t(`${monument.monument}.shortDescription`)}
              </p>
            </Suspense>
          </Link>{" "}
        </li>
      ))}
    </ul>
  );
}
