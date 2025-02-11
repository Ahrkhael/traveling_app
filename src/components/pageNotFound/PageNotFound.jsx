import { useTranslations } from "next-intl";

export default function PageNotFound() {
  const t = useTranslations("NotFoundLocalePage");
  return (
    <main className="main">
      <h1 className="title">404 | {t("Title")}</h1>
      <p>{t("Description")}</p>
    </main>
  );
}
