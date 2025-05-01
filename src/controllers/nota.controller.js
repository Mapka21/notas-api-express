import * as notaModel from '../models/nota.model.js';
import * as clasModel from '../models/clasificacion.model.js';

/**
 * Listar todas las notas
 */
export const listarNotas = async (req, res) => {
  try {
    const notas = await notaModel.getAllNotas();
    res.json(notas);
  } catch (err) {
    console.error('Error en listarNotas:', err);
    res.status(500).json({ mensaje: 'Error al listar notas', error: err.message });
  }
};

/**
 * Obtener una nota por ID
 */
export const obtenerNota = async (req, res) => {
  try {
    const { id } = req.params;
    const nota = await notaModel.getNotaById(id);
    if (!nota) {
      return res.status(404).json({ mensaje: 'Nota no encontrada' });
    }
    res.json(nota);
  } catch (err) {
    console.error(`Error en obtenerNota (ID=${req.params.id}):`, err);
    res.status(500).json({ mensaje: 'Error al obtener la nota', error: err.message });
  }
};

/**
 * Crear una nueva nota
 */
export const crearNota = async (req, res) => {
  try {
    console.log('POST /notas body:', req.body);
    const { titulo, autor, cuerpo, clasificacion_id } = req.body;
    if (!titulo || !autor || !cuerpo || !clasificacion_id) {
      return res.status(400).json({ mensaje: 'Faltan datos obligatorios para crear la nota' });
    }
    const id = await notaModel.createNota({ titulo, autor, cuerpo, clasificacion_id });
    res.status(201).json({ id, titulo, autor, cuerpo, clasificacion_id });
  } catch (err) {
    console.error('Error en crearNota:', err);
    res.status(500).json({ mensaje: 'Error al crear nota', error: err.message });
  }
};

/**
 * Editar una nota existente
 */
export const editarNota = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`PUT /notas/${id} body:`, req.body);
    const { titulo, autor, cuerpo, clasificacion_id } = req.body;
    if (!titulo || !autor || !cuerpo || !clasificacion_id) {
      return res.status(400).json({ mensaje: 'Faltan datos obligatorios para actualizar la nota' });
    }
    await notaModel.updateNota(id, { titulo, autor, cuerpo, clasificacion_id });
    res.json({ mensaje: 'Nota actualizada' });
  } catch (err) {
    console.error(`Error en editarNota (ID=${req.params.id}):`, err);
    res.status(500).json({ mensaje: 'Error al actualizar nota', error: err.message });
  }
};

/**
 * Eliminar una nota
 */
export const borrarNota = async (req, res) => {
  try {
    const { id } = req.params;
    await notaModel.deleteNota(id);
    res.json({ mensaje: 'Nota eliminada' });
  } catch (err) {
    console.error(`Error en borrarNota (ID=${req.params.id}):`, err);
    res.status(500).json({ mensaje: 'Error al eliminar nota', error: err.message });
  }
};

/**
 * Listar todas las clasificaciones
 */
export const listarClasificaciones = async (req, res) => {
  try {
    const cls = await clasModel.getAllClasificaciones();
    res.json(cls);
  } catch (err) {
    console.error('Error en listarClasificaciones:', err);
    res.status(500).json({ mensaje: 'Error al listar clasificaciones', error: err.message });
  }
};
