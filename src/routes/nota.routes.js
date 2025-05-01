import { Router } from 'express';
import {
  listarNotas,
  obtenerNota,
  crearNota,
  editarNota,
  borrarNota,
  listarClasificaciones
} from '../controllers/nota.controller.js';

const router = Router();

// CRUD de notas
router.get('/notas',    listarNotas);
router.get('/notas/:id', obtenerNota);
router.post('/notas',   crearNota);
router.put('/notas/:id', editarNota);
router.delete('/notas/:id', borrarNota);

// Listar clasificaciones
router.get('/clasificaciones', listarClasificaciones);

export default router;
