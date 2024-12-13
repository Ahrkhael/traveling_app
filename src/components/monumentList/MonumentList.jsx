import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Suspense } from "react";

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
          <Link href={`/${city}/${monument.monument}`}>
            <Suspense>
              <Image
                src={monument.image}
                width={200}
                height={200}
                alt={`Foto del monumento ${monument.monument}`}
                className={imgStyles}
              />
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
