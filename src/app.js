// src/app.js
import express from 'express';
import dotenv from 'dotenv';
import notaRoutes from './routes/nota.routes.js';

dotenv.config();
const app = express();

// 1) Middleware de parseo JSON
app.use(express.json());

// 2) Rutas
app.use('/api', notaRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API Notas funcionando ✔️');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
