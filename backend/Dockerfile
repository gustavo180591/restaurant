# ── Stage 1: builder ────────────────────────────────────────────────────────────
FROM node:18-alpine AS builder
WORKDIR /app

# Instala todas las deps (prod + dev)
COPY package*.json ./
RUN npm install

# Copia el código y construye
COPY . .
RUN npm run build

# ── Stage 2: producción ────────────────────────────────────────────────────────
FROM node:18-alpine AS production
WORKDIR /app

# Sólo deps de producción
COPY package*.json ./
RUN npm ci --omit=dev

# Copia el resultado compilado y artefactos necesarios
COPY --from=builder /app/dist ./dist
# Si usas Prisma, copia también tus esquemas/migrations
COPY --from=builder /app/prisma ./prisma

# Expón y arranca
EXPOSE 3000
CMD ["node", "dist/main.js"]
