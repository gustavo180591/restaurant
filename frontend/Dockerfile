# Usa una imagen ligera de Node.js para React
FROM node:18-alpine

# Directorio de trabajo
WORKDIR /app

# Copia dependencias e instala
COPY package*.json ./
RUN npm ci

# Copia código y construye
COPY . .
RUN npm run build

# Sirve contenido estático con serve
RUN npm install -g serve

# Expone el puerto del servidor estático
EXPOSE 3000

# Comando por defecto
CMD ["serve", "-s", "build", "-l", "3000"]