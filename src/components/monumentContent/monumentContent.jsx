import Image from "next/image";
import { useTranslations } from "next-intl";

export default function MonumentContent({
  monumentData,
  city,
  monument,
  styles,
}) {
  const tGlobal = useTranslations("Cities");
  const tMonument = useTranslations(
    monumentData ? `Cities.${city}.monuments.${monument}` : "Cities"
  );

  if (!monumentData) {
    return (
      <main className="main">
        <p className="description">
          {tGlobal("NoMonumentFound", {
            monument: monument,
            city: city,
          })}
        </p>
      </main>
    );
  }

  return (
    <main className={`main ${styles.main}`}>
      <Image
        src={monumentData.image}
        width={200}
        height={200}
        alt={tGlobal("MonumentImageAlt", {
          monument: monument,
          city: city,
        })}
        className={styles.img}
      />
      <h1 className="title">{tMonument("monument")}</h1>
      <p className={`description ${styles.monumentDescription}`}>
        {tMonument("longDescription")}
      </p>
    </main>
  );
}
