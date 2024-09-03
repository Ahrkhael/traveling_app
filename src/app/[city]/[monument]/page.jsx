const validMonuments = {
  Sevilla: ["Giralda", "Alcázar", "Plaza de España"],
  Valencia: ["Ciudad de las Artes", "Lonja de la Seda"],
  Madrid: ["Palacio Real", "Parque del Retiro"],
  Barcelona: ["Sagrada Familia", "Catedral de Barcelona", "Liceu"],
};

export default function MonumentPage({ params }) {
  const { city, monument } = params;

  // Validar si el monumento pertenece a la ciudad
  /*const isValidMonument = validMonuments[city]?.includes(monument) || false;

  if (!isValidMonument) {
    // Mostrar mensaje o redirigir si el monumento no pertenece a la ciudad
    return <div>No se encontró el monumento en {city}.</div>;
  }*/

  return (
    <div>
      <h1>
        {monument} en {city}
      </h1>
      <p>Detalles sobre {monument}...</p>
    </div>
  );
}
