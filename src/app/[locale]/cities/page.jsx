import CityList from "@/components/cityList/CityList";
import citiesData from "../../../../data/data.json";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";

const CitiesPage = () => {
  const t = useTranslations("Cities");
  const cities = citiesData.Cities;

  return (
    <main className="main">
      <h1 className="title">Elige tu próximo destino</h1>
      <CityList
        cities={cities}
        listStyles={styles.list}
        listItemStyles={styles.listItem}
        imgStyles={styles.img}
        titleStyles={"title"}
        descriptionStyles={"description"}
        t={t}
      />
    </main>
  );
};

export default CitiesPage;
