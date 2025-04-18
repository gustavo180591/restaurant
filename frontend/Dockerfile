# ── Stage 1: builder ────────────────────────────────────────────────────────────
FROM node:18-alpine AS builder
WORKDIR /app

# Copia y instala deps de desarrollo y producción
COPY package*.json ./
RUN npm ci

# Copia archivos estáticos y de configuración
COPY index.html ./
COPY public ./public

# Copia el resto del código y compila
COPY . ./
RUN npm run build

# ── Stage 2: producción ────────────────────────────────────────────────────────
FROM node:18-alpine AS production
WORKDIR /app

# Copia solo deps de producción
COPY package*.json ./
RUN npm ci --omit=dev

# Copia la aplicación compilada y archivos estáticos
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/index.html ./index.html

# Expone el puerto para servir la app
EXPOSE 4173

# Arranca un servidor estático para el bundle
CMD ["npx", "serve", "-s", "dist"]

