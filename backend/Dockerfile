# Usa una imagen ligera de Node.js
FROM node:18-alpine

# Directorio de trabajo
WORKDIR /app

# Copia archivos de dependencias e instala
COPY package*.json ./
RUN npm ci --only=production

# Copia el resto del código y construye
COPY . .
RUN npm run build

# Expone el puerto de la API
EXPOSE 4000

# Comando por defecto
CMD ["node", "dist/main.js"]