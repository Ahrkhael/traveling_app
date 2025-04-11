import { useTranslations } from "next-intl";
import styles from "./TestimonyList.module.css";

export default function TestimonyList({
  listStyles,
  listItemStyles,
  titleStyles,
  descriptionStyles,
}) {
  const t = useTranslations("Testimonies");
  const keys = ["1", "2", "3", "4", "5", "6"];

  return (
    <ul className={listStyles}>
      {keys.map((key) => (
        <li key={key} className={listItemStyles}>
          <h2 className={titleStyles}>{t(`${key}.author`)}</h2>
          <p className={`${styles.description} ${descriptionStyles}`}>
            {t(`${key}.testimony`)}
          </p>
          <p className={styles.rateList}>{t(`${key}.score`)}</p>
        </li>
      ))}
    </ul>
  );
}
