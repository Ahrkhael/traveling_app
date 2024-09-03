import Image from "next/image";
import Link from "next/link";

const Cities = () => {
  const cities = ["Madrid", "Barcelona", "Sevilla", "Valencia"];

  return (
    <div>
      <h1>Cities page</h1>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <Image alt="" />
            <Link href={`/${city}`}>{city}</Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cities;
