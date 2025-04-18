# ── Stage 1: builder ────────────────────────────────────────────────────────────
FROM node:18-alpine AS builder
WORKDIR /app

# Copia las dependencias (prod + dev) e instala
COPY package*.json ./
RUN npm install

# Copia el resto del código y construye
COPY . .
RUN npm run build

# ── Stage 2: producción ────────────────────────────────────────────────────────
FROM node:18-alpine AS production
WORKDIR /app

# Copia las dependencias de producción
COPY package*.json ./
RUN npm ci --omit=dev

# Copia la compilación desde el builder
COPY --from=builder /app/dist ./dist

# Expón el puerto y arranca la aplicación
EXPOSE 3000
CMD ["node", "dist/main.js"]

