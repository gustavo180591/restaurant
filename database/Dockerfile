# /database/Dockerfile
FROM postgres:15
ENV POSTGRES_DB=restaurant
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=securepass
COPY prisma/migrations /docker-entrypoint-initdb.d/
