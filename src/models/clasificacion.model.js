import { pool } from '../db.js';

export const getAllClasificaciones = async () => {
  const [rows] = await pool.query('SELECT * FROM Clasificacion;');
  return rows;
};
