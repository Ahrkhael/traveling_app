const monumentsData = {
  Sevilla: ["Giralda", "Alcázar", "Plaza de España"],
  Valencia: ["Ciudad de las Artes", "Lonja de la Seda"],
  Madrid: ["Palacio Real", "Parque del Retiro"],
  Barcelona: ["Sagrada Familia", "Catedral de Barcelona", "Liceu"],
};

export default function CityPage({ params }) {
  const { city } = params;
  const monuments = monumentsData[city] || [];

  return (
    <div>
      <h1>Monumentos en {city}</h1>
      <ul>
        {monuments.map((monument) => (
          <li key={monument}>
            <a href={`/${city}/${monument}`}>{monument}</a>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
