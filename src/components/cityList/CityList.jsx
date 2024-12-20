import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Suspense } from "react";

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
            <Suspense>
              <Image
                src={city.image}
                width={250}
                height={250}
                sizes="20dvw 50dvh"
                alt={`Foto de la ciudad de ${city.city}`}
                className={imgStyles}
              />
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
