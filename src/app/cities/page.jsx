import Image from "next/image";
import Link from "next/link";
import citiesData from "../../../data/data.json";

const Cities = () => {
  const cities = citiesData.Cities;

  return (
    <div>
      <h1>Cities page</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.city}>
            <Image alt="" />
            <Link href={`/${city.city}`}>{city.city}</Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cities;
