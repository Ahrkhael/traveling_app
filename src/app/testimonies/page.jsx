import TestimonyList from "../../components/testimonyList/TestimonyList";
import data from "../../../data/data.json";
import styles from "./page.module.css";

const TestimonyPage = () => {
  const testimonyData = data.Testimonies;
  return (
    <main className="main">
      <h1 className="title">Testimonios de otros viajeros como tú</h1>
      <TestimonyList
        testimonies={testimonyData}
        listStyles={styles.list}
        listItemStyles={styles.listItem}
        titleStyles={"title"}
        descriptionStyles={"description"}
      />
    </main>
  );
};

export default TestimonyPage;
