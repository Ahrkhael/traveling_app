import { Link } from "@/i18n/routing";
import Image from "next/image";

const CityList = ({
  listStyles,
  listItemStyles,
  imgStyles,
  titleStyles,
  descriptionStyles,
  t,
}) => {
  const keys = ["Madrid", "Barcelona", "Sevilla", "Valencia"];

  return (
    <ul className={listStyles}>
      {keys.map((key) => (
        <li key={key} className={listItemStyles}>
          <Link href={`/${key}`}>
            <Image
              src={t(`${key}.image`)}
              width={200}
              height={200}
              alt={`Foto de la ciudad de ${key}`}
              className={imgStyles}
            />
            <h2 className={titleStyles}>{t(`${key}.city`)}</h2>
            <p className={descriptionStyles}>
              {t(`${key}.shortDescription`) ||
                "Una ciudad maravillosa para visitar."}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CityList;
