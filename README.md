# Enrollment System — Docker Setup

Proyecto con **Spring Boot**, **React (Vite + PNPM)** y **PostgreSQL**, usando **Docker Compose**.

## 🚀 Levantar el proyecto

1. Clona el repositorio y entra al directorio:

```bash
   git clone <url-del-repo>
   cd enrollment-system
```

2. Crea un archivo `.env` en la raíz con estas variables (si no existe):

```bash
   API_PORT=8080
   WEB_PORT=3000
   DB_PORT_HOST=5433

   POSTGRES_DB=enrollmentdb
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres123
   DB_HOST=postgres-db
   DB_PORT=5432

   PUBLIC_API_URL=http://localhost:${API_PORT}
```

3. Levanta todo con Docker Compose:

```bash
  docker compose up -d --build
```

## 🌐 Acceder

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend (API):** [http://localhost:8080](http://localhost:8080)
- **Base de datos (PostgreSQL):** `localhost:5433`

## 🧹 Apagar los contenedores

```bash
docker compose down
```

Si quieres borrar los datos de la base de datos:

```bash
docker compose down -v
```
