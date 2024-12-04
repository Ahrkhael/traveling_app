import { useTranslations } from "next-intl";
import MonumentList from "../monumentList/MonumentList";

export default function CityContent({ cityData, decodedCity, styles }) {
  const t = useTranslations("Cities");

  if (!cityData) {
    return (
      <main className="main">
        <p className="description">{t("NoCityFound", { city: decodedCity })}</p>
      </main>
    );
  }

  const monuments = cityData.monuments;

  return (
    <main className="main">
      <div className={styles.divCity}>
        <h1 className="title">{decodedCity}</h1>
        <h2 className={`description ${styles.cityLongDescription}`}>
          {t(`${cityData.city}.longDescription`)}
        </h2>
      </div>
      <div className={styles.divMonuments}>
        <h1 className="title">{t("MonumentsInCity", { city: decodedCity })}</h1>
        <MonumentList
          city={decodedCity}
          monuments={monuments}
          listStyles={styles.list}
          imgStyles={styles.img}
          titleStyles={"title"}
          descriptionStyles={`description ${styles.monumentDescription}`}
        />
      </div>
    </main>
  );
}
