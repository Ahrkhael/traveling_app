import { useTranslations } from "next-intl";
import MonumentList from "../monumentList/MonumentList";

export default function CityContent({ cityData, city, styles }) {
  const t = useTranslations("Cities");

  if (!cityData) {
    return (
      <main className="main">
        <p className="description">{t("NoCityFound", { city: city })}</p>
      </main>
    );
  }

  const monuments = cityData.monuments;

  return (
    <main className={`main ${styles.main}`}>
      <div className={styles.divCity}>
        <h1 className="title">{city}</h1>
        <h2 className={`description`}>{t(`${city}.longDescription`)}</h2>
      </div>
      <div className={styles.divMonuments}>
        <h1 className="title">{t("MonumentsInCity", { city: city })}</h1>
        <MonumentList
          city={city}
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
