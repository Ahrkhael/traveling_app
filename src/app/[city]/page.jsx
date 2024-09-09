import monumentsData from "../../../data/data.json";
import Link from "next/link";

export default function CityPage({ params }) {
  const { city } = params;

  // Decodificar los parámetros para manejar los espacios y caracteres especiales
  const decodedCity = decodeURIComponent(city).toLowerCase();

  // Buscar la ciudad dentro del array Cities
  const cityData = monumentsData.Cities.find(
    (item) => item.city.toLowerCase() === decodedCity
  );

  // Si se encuentra la ciudad, obtener sus monumentos; si no, usar un array vacío
  const monuments = cityData ? cityData.monuments : [];

  return (
    <div>
      <h1>Monumentos en {city}</h1>
      <ul>
        {monuments.map((monument) => (
          <li key={monument.monument}>
            <Link href={`/${city}/${monument.monument}`}>
              {monument.monument}
            </Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
