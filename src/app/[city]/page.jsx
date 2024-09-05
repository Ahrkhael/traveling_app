// src/[city]/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CityPage = () => {
  const [cityData, setCityData] = useState(null);
  const router = useRouter();
  const { city } = router.query;

  useEffect(() => {
    if (city) {
      fetch("/api/cities")
        .then((res) => res.json())
        .then((data) => {
          const cityInfo = data.Cities.find(
            (c) => c.city.toLowerCase() === city.toLowerCase()
          );
          setCityData(cityInfo);
        })
        .catch((error) => console.error("Error fetching city data:", error));
    }
  }, [city]);

  if (!cityData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Monumentos en {cityData.city}</h1>
      <ul>
        {cityData.monuments.map((monument) => (
          <li key={monument.monument}>
            <Link href={`/${cityData.city}/${monument.monument}`}>
              {monument.monument}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityPage;
