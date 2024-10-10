import Link from "next/link";
import Image from "next/image";

export default function MonumentList({
  city,
  monuments,
  listStyles,
  listItemStyles,
  imgStyles,
  titleStyles,
  descriptionStyles,
}) {
  return (
    <ul className={listStyles}>
      {monuments.map((monument) => (
        <li key={monument.monument} className={listItemStyles}>
          <Link href={`/${city}/${monument.monument}`}>
            <Image
              src={monument.image}
              width={200}
              height={200}
              alt={`Foto del monumento ${monument.monument}`}
              className={imgStyles}
            />
            <h2 className={titleStyles}>{monument.monument}</h2>
            <p className={descriptionStyles}>{monument.shortDescription}</p>
          </Link>{" "}
        </li>
      ))}
    </ul>
  );
}
