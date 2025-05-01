import { pool } from '../db.js';

export const getAllNotas = async () => {
  const [rows] = await pool.query(`
    SELECT n.id, n.titulo, n.autor, n.fecha_hora, n.cuerpo,
           c.id AS clasificacion_id, c.nombre AS clasificacion
    FROM Nota n
    JOIN Clasificacion c ON n.clasificacion_id = c.id
    ORDER BY n.fecha_hora DESC;`);
  return rows;
};

export const getNotaById = async (id) => {
  const [rows] = await pool.query(`
    SELECT n.id, n.titulo, n.autor, n.fecha_hora, n.cuerpo,
           c.id AS clasificacion_id, c.nombre AS clasificacion
    FROM Nota n
    JOIN Clasificacion c ON n.clasificacion_id = c.id
    WHERE n.id = ?;`, [id]);
  return rows[0];
};

export const createNota = async ({ titulo, autor, cuerpo, clasificacion_id }) => {
  const [result] = await pool.query(`
    INSERT INTO Nota (titulo, autor, cuerpo, clasificacion_id)
    VALUES (?, ?, ?, ?);`,
    [titulo, autor, cuerpo, clasificacion_id]
  );
  return result.insertId;
};

export const updateNota = async (id, { titulo, autor, cuerpo, clasificacion_id }) => {
  await pool.query(`
    UPDATE Nota
    SET titulo = ?, autor = ?, cuerpo = ?, clasificacion_id = ?
    WHERE id = ?;`,
    [titulo, autor, cuerpo, clasificacion_id, id]
  );
};

export const deleteNota = async (id) => {
  await pool.query(`DELETE FROM Nota WHERE id = ?;`, [id]);
};
