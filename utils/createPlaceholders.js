// Script para generar imágenes con blur dado un conjunto de imágenes

import fs from "fs";
import path from "path";
import lqip from "lqip-modern";

import data from "../data/data.json" assert { type: "json" };

const outputFilePath = path.join(process.cwd(), "data/placeholders.json");

async function createPlaceholders() {
  const placeholders = [];

  for (const city of data.Cities) {
    try {
      const imagePath = path.resolve("./public" + city.image);

      // Genera el placeholder
      const placeholder = await lqip(imagePath);

      // Guarda el placeholder en el array
      placeholders.push({
        city: city.city,
        blurDataURL: placeholder.metadata.dataURIBase64, // Base64 del placeholder
      });
    } catch (error) {
      console.error(
        `Error al generar el placeholder para ${monument.monument}:`,
        error
      );
    }

    for (const monument of city.monuments) {
      try {
        const imagePath = path.resolve("./public" + monument.image);

        // Genera el placeholder
        const placeholder = await lqip(imagePath);

        // Guarda el placeholder en el array
        placeholders.push({
          city: city.city,
          monument: monument.monument,
          blurDataURL: placeholder.metadata.dataURIBase64, // Base64 del placeholder
        });
      } catch (error) {
        console.error(
          `Error al generar el placeholder para ${monument.monument}:`,
          error
        );
      }
    }
  }

  // Guarda los placeholders en un archivo JSON
  fs.writeFileSync(outputFilePath, JSON.stringify(placeholders, null, 2));
  console.log(`Placeholders generados y guardados en ${outputFilePath}`);
}

// Ejecutar la función de generación
createPlaceholders();
