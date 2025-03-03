import { useTranslations } from "next-intl";
import { Suspense } from "react";
import styleImage from "./MonumentContent.module.css";
import Image from "next/image";
import MapWrapper from "../map/Map.jsx";

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
      <Suspense>
        <div className={styleImage.imageWrapper}>
          <Image
            src={monumentData.image}
            alt={tGlobal("MonumentImageAlt", {
              monument: monument,
              city: city,
            })}
            fill
            placeholder="blur"
            blurDataURL={monumentData.blurDataURL}
            sizes="(max-width: 768px) 100dvw, (max-width: 1200px) 28dvh, 28dvh"
            style={{ objectFit: "cover", borderRadius: "10px" }}
            className={styleImage.img}
          />
        </div>
      </Suspense>
      <h1 className="title">{tMonument("monument")}</h1>
      <p className={`description ${styles.monumentDescription}`}>
        {tMonument("longDescription")}
      </p>
      <MapWrapper
        position={[monumentData.latitude, monumentData.longitude]}
        name={monumentData.monument}
      />
    </main>
  );
}
