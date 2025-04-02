import CityList from "../../../components/cityList/CityList";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";

export default function CityPageContent({ cities }) {
  const t = useTranslations("Cities");

  return (
    <main className="main">
      <h1 className="title">{t("CitiesPageTitle")}</h1>
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
}
