import monumentsData from "../../../../data/data.json";

export default function MonumentPage({ params }) {
  const { city, monument } = params;

  // Decodificar los parámetros para manejar los espacios y caracteres especiales
  const decodedCity = decodeURIComponent(city).toLowerCase();
  const decodedMonument = decodeURIComponent(monument).toLowerCase();

  // Buscar la ciudad dentro del array Cities
  const cityData = monumentsData.Cities.find(
    (item) => item.city.toLowerCase() === decodedCity
  );

  // Si se encuentra la ciudad, buscar el monumento dentro de los monumentos de esa ciudad
  const monumentData = cityData
    ? cityData.monuments.find(
        (item) => item.monument.toLowerCase() === decodedMonument
      )
    : null;

  // Si no se encuentra el monumento o la ciudad, mostrar un mensaje de error
  if (!monumentData) {
    return (
      <div>
        No se encontró el monumento {decodedMonument} en {decodedCity}.
      </div>
    );
  }

  return (
    <div>
      <h1>
        {monumentData.monument} en {cityData.city}
      </h1>
      <p>{monumentData.description}</p>
    </div>
  );
};

export default MonumentPage;
