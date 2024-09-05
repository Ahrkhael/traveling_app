// src/cities/page.jsx
import Link from "next/link";
import path from "path";
import { promises as fs } from "fs";

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);

  return {
    props: {
      cities: data.Cities,
    },
  };
}

const Cities = ({ cities }) => {
  return (
    <div>
      <h1>Cities page</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.city}>
            <Link href={`/${city.city}`}>{city.city}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cities;
