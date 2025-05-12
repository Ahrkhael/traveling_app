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
      {monuments.map((monument) => (
        <li key={monument.id} className={listItemStyles}>
          <Link
            href={`/${tGlobal(`${city}.city`)}/${monument.monument}`}
            style={{ height: "100%" }}
          >
            <Suspense>
              <div className={styles.imageWrapper}>
                <Image
                  src={monument.image}
                  alt={tGlobal("MonumentImageAlt", {
                    monument: monument.monument,
                    city: tGlobal(`${city}.city`),
                  })}
                  fill
                  placeholder="blur"
                  blurDataURL={monument.blurDataURL}
                  sizes="(max-width: 768px) 100dvw, (max-width: 1200px) 28dvh, 28dvh"
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                  className={imgStyles}
                />
              </div>
              <h2 className={titleStyles}>
                {t(`${monument.monument.toLowerCase()}.monument`)}
              </h2>
              <p className={descriptionStyles}>
                {t(`${monument.monument.toLowerCase()}.shortDescription`)}
              </p>
            </Suspense>
          </Link>{" "}
        </li>
      ))}
    </ul>
  );
}
