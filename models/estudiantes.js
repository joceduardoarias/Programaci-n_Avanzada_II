// models/estudiante.js
const db = require('../db'); // Importar la conexión a la base de datos

// Definir un objeto Estudiante que contendrá la lógica CRUD
const Estudiante = {
  // Crear un nuevo estudiante
  crear: (datos, callback) => {
    const { nombre, edad, grado } = datos;
    const sql = 'INSERT INTO estudiantes (nombre, edad, grado) VALUES (?, ?, ?)';
    db.query(sql, [nombre, edad, grado], (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    });
  },

  // Obtener todos los estudiantes
  obtenerTodos: (callback) => {
    const sql = 'SELECT * FROM estudiantes';
    db.query(sql, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  },

  // Obtener un estudiante por ID
  obtenerPorId: (id, callback) => {
    const sql = 'SELECT * FROM estudiantes WHERE id = ?';
    db.query(sql, [id], (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results[0]);
    });
  },

  // Actualizar un estudiante
  actualizar: (id, datos, callback) => {
    const { nombre, edad, grado } = datos;
    const sql = 'UPDATE estudiantes SET nombre = ?, edad = ?, grado = ? WHERE id = ?';
    db.query(sql, [nombre, edad, grado, id], (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    });
  },

  // Eliminar un estudiante
  eliminar: (id, callback) => {
    const sql = 'DELETE FROM estudiantes WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    });
  }
};

module.exports = Estudiante;
