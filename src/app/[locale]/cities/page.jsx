// import CityList from "@/components/cityList/CityList";
// import citiesData from "../../../../data/data.json";
// import styles from "./page.module.css";
// import { useTranslations } from "next-intl";
import CitiesPageContent from "./CitiesPageContent";

export default async function CitiesPage() {
  const res = await fetch("http://127.0.0.1:3001/api/v1/cities/");
  const cities = await res.json();

  return <CitiesPageContent cities={cities} />;
}

// export default async function CitiesPage() {
//   const t = useTranslations("Cities");
//   //const cities = citiesData.Cities;
//   const res = await fetch("http://127.0.0.1:3001/api/v1/cities/");
//   const cities = await res.json();

//   return (
//     <main className="main">
//       <h1 className="title">{t("CitiesPageTitle")}</h1>
//       <CityList
//         cities={cities}
//         listStyles={styles.list}
//         listItemStyles={styles.listItem}
//         imgStyles={styles.img}
//         titleStyles={"title"}
//         descriptionStyles={"description"}
//         t={t}
//       />
//     </main>
//   );
// }
