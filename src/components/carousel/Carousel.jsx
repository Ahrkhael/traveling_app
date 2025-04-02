import CarouselClient from "./CarouselClient";

async function getCities() {
  const res = await fetch("http://127.0.0.1:3001/api/v1/cities/");
  if (!res.ok) {
    throw new Error("Error al obtener los datos de las ciudades");
  }
  return res.json();
}

export default async function Carousel({ title, titleDescription }) {
  const cities = await getCities();

  return (
    <CarouselClient
      title={title}
      titleDescription={titleDescription}
      cities={cities}
    />
  );
}
