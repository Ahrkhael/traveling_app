// Script para actualizar blurDataURL directamente para las imágenes en data.json

import fs from "fs";
import path from "path";
import lqip from "lqip-modern";

const dataFilePath = path.join(process.cwd(), "data/data.json");

async function updateBlurDataURLs() {
  try {
    // Lee y parsea el archivo data.json
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

    for (const city of data.Cities) {
      // Procesa la imagen de la ciudad
      try {
        const cityImagePath = path.resolve("./public" + city.image);
        const cityPlaceholder = await lqip(cityImagePath);
        city.blurDataURL = cityPlaceholder.metadata.dataURIBase64;
      } catch (error) {
        console.error(
          `Error al generar el placeholder para la imagen de la ciudad ${city.city}:`,
          error
        );
      }

      // Procesa las imágenes de los monumentos de la ciudad
      for (const monument of city.monuments) {
        try {
          const monumentImagePath = path.resolve("./public" + monument.image);
          const monumentPlaceholder = await lqip(monumentImagePath);
          monument.blurDataURL = monumentPlaceholder.metadata.dataURIBase64;
        } catch (error) {
          console.error(
            `Error al generar el placeholder para el monumento ${monument.monument} en la ciudad ${city.city}:`,
            error
          );
        }
      }
    }

    // Sobrescribe el archivo data.json con los nuevos valores
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    console.log(`BlurDataURLs actualizados y guardados en ${dataFilePath}`);
  } catch (error) {
    console.error("Error al procesar el archivo data.json:", error);
  }
}

// Ejecutar la función de actualización
updateBlurDataURLs();
