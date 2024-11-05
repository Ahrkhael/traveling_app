# Usa una imagen base de Node.js
FROM node:alpine

# Crea y establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código de tu proyecto al contenedor
COPY . .

# Expone el puerto en el que correrá Next.js (por defecto 3000)
EXPOSE 3000

# Define el comando para iniciar Next.js
CMD ["npm", "run", "dev"]
