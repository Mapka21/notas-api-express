# Notas API Express

Una API REST sencilla para gestionar notas personales (CRUD) desarrollada con Node.js, Express y MySQL.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Base de Datos](#base-de-datos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Ejecutar la API](#ejecutar-la-api)
- [Endpoints](#endpoints)
- [Control de Versiones](#control-de-versiones)
- [Autor](#autor)

## Descripción

Este proyecto implementa una API REST para crear, leer, actualizar y eliminar notas personales. Cada nota incluye:

- **Título**
- **Autor**
- **Fecha y hora**
- **Cuerpo**
- **Clasificación** (personal, laboral, escolar, otra)

## Tecnologías

- Node.js
- Express
- MySQL (via XAMPP)
- mysql2
- dotenv
- nodemon (desarrollo)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Mapka21/notas-api-express.git
   cd notas-api-express
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```

## Configuración

Crea un archivo `.env` en la raíz con las siguientes variables:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=notas_app
DB_PORT=3306
PORT=3000
```

## Base de Datos

1. Inicia XAMPP y levanta MySQL.
2. En phpMyAdmin o terminal, ejecuta el script SQL en `database/init.sql` para crear la base y tablas:
   ```sql
   CREATE DATABASE IF NOT EXISTS notas_app;
   USE notas_app;
   CREATE TABLE Clasificacion ...;
   CREATE TABLE Nota ...;
   INSERT INTO Clasificacion ...;
   ```

## Estructura del Proyecto

```
notas-api-express/
├─ src/
│  ├─ app.js             # Punto de entrada
│  ├─ db.js              # Conexión a MySQL
│  ├─ models/            # Acceso a datos
│  ├─ controllers/       # Lógica de negocio
│  └─ routes/            # Definición de endpoints
├─ .env
├─ package.json
└─ README.md
```

## Ejecutar la API

- En desarrollo (con hot reload):
  ```bash
  npm run dev
  ```
- En producción:
  ```bash
  npm start
  ```

La API estará disponible en `http://localhost:3000`.

## Endpoints

Todas las rutas comienzan con `/api`.

| Método | Ruta                   | Descripción                      |
| ------ | ---------------------- | -------------------------------- |
| GET    | `/api/notas`           | Listar todas las notas           |
| GET    | `/api/notas/:id`       | Obtener una nota por ID          |
| POST   | `/api/notas`           | Crear una nueva nota             |
| PUT    | `/api/notas/:id`       | Actualizar una nota existente    |
| DELETE | `/api/notas/:id`       | Eliminar una nota                |
| GET    | `/api/clasificaciones` | Listar todas las clasificaciones |

### Ejemplo de petición POST

```http
POST /api/notas HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
  "titulo": "Mi nota",
  "autor": "Alicia",
  "cuerpo": "Esta es una nota de ejemplo",
  "clasificacion_id": 1
}
```

## Control de Versiones

Repositorio en GitHub: [Mapka21/notas-api-express](https://github.com/Mapka21/notas-api-express)

## Autor

Desarrollado por Mapka21.
