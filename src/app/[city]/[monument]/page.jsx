// src/[city]/[monument]/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const MonumentPage = () => {
  const [monumentData, setMonumentData] = useState(null);
  const router = useRouter();
  const { city, monument } = router.query;

  useEffect(() => {
    if (city && monument) {
      fetch("/api/cities")
        .then((res) => res.json())
        .then((data) => {
          const cityInfo = data.Cities.find(
            (c) => c.city.toLowerCase() === city.toLowerCase()
          );
          const monumentInfo = cityInfo?.monuments.find(
            (m) => m.monument.toLowerCase() === monument.toLowerCase()
          );
          setMonumentData(monumentInfo);
        })
        .catch((error) =>
          console.error("Error fetching monument data:", error)
        );
    }
  }, [city, monument]);

  if (!monumentData) return <div>Monumento no encontrado.</div>;

  return (
    <div>
      <h1>{monumentData.monument}</h1>
      <p>{monumentData.description}</p>
    </div>
  );
};

export default MonumentPage;
