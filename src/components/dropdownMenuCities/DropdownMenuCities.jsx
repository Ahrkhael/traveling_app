import DropdownMenuCitiesContent from "./DropdownMenuCitiesContent";
import data from "../../../data/data.json";

export default function DropdownMenuCities({ t }) {
  const title = t("Cities");
  const cities = data.Cities;

  return <DropdownMenuCitiesContent title={title} cities={cities} />;
}
