// lib/db.js
import mysql from "mysql2/promise";

// Configuración de la conexión a la base de datos
const connection = await mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "tu_usuario",
  password: process.env.MYSQL_PASSWORD || "tu_contraseña",
  database: process.env.MYSQL_DATABASE || "nombre_de_tu_base_de_datos",
});

export default connection;
