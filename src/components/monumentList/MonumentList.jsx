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
  const tGlobal = useTranslations("Cities");

  return (
    <ul className={listStyles}>
      {monuments.map((monumentName, index) => (
        <li key={index} className={listItemStyles}>
          <Link href={`/${city}/${monumentName}`} style={{ height: "100%" }}>
            <Suspense>
              <div className={styles.imageWrapper}>
                {/* <Image
                  src={monument.image}
                  alt={tGlobal("MonumentImageAlt", {0
                    monument: monument.monument,
                    city: city,
                  })}
                  fill
                  placeholder="blur"
                  blurDataURL={monument.blurDataURL}
                  sizes="(max-width: 768px) 100dvw, (max-width: 1200px) 28dvh, 28dvh"
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                  className={imgStyles}
                /> */}
              </div>
              <h2 className={titleStyles}>{t(`${monumentName}.monument`)}</h2>
              <p className={descriptionStyles}>
                {t(`${monumentName}.shortDescription`)}
              </p>
            </Suspense>
          </Link>{" "}
        </li>
      ))}
    </ul>
  );
}
