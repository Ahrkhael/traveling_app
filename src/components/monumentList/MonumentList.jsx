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
      {monuments.map((monument, index) => (
        <li key={index} className={listItemStyles}>
          <Link href={`/${city}/${monument.name}`} style={{ height: "100%" }}>
            <Suspense>
              <div className={styles.imageWrapper}>
                <Image
                  src={monument.image_url}
                  alt={tGlobal("MonumentImageAlt", {
                    monument: monument.name,
                    city: city,
                  })}
                  fill
                  placeholder="blur"
                  blurDataURL={monument.blur_data_url}
                  sizes="(max-width: 768px) 100dvw, (max-width: 1200px) 28dvh, 28dvh"
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                  className={imgStyles}
                />
              </div>
              <h2 className={titleStyles}>{t(`${monument.name}.monument`)}</h2>
              <p className={descriptionStyles}>
                {t(`${monument.name}.shortDescription`)}
              </p>
            </Suspense>
          </Link>{" "}
        </li>
      ))}
    </ul>
  );
}
