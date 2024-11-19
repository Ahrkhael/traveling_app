import Link from "next/link";
import Image from "next/image";

const CityList = ({
  cities,
  listStyles,
  listItemStyles,
  imgStyles,
  titleStyles,
  descriptionStyles,
}) => {
  return (
    <ul className={listStyles}>
      {cities.map((city) => (
        <li key={city.id} className={listItemStyles}>
          <Link href={`/${city.city}`}>
            <Image
              src={city.image}
              width={200}
              height={200}
              alt={`Foto de la ciudad de ${city.city}`}
              className={imgStyles}
            />
            <h2 className={titleStyles}>{city.city}</h2>
            <p className={descriptionStyles}>
              {city.shortDescription || "Una ciudad maravillosa para visitar."}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CityList;
