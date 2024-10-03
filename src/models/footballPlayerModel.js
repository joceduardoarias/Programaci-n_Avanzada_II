// models/footballPlayerModel.js
const db = require('../config/db');

// Definir el modelo de FootballPlayer
const FootballPlayer = {
  create: (data, callback) => {
    const { nombre, edad, equipo } = data;
    const sql = 'INSERT INTO footballplayers (nombre, edad, equipo) VALUES (?, ?, ?)';
    db.query(sql, [nombre, edad, equipo], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  },

  findAll: (callback) => {
    const sql = 'SELECT * FROM footballplayers';
    db.query(sql, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  findById: (id, callback) => {
    const sql = 'SELECT * FROM footballplayers WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) return callback(err);
      callback(null, result[0]);
    });
  },

  update: (id, data, callback) => {
    const { nombre, edad, equipo } = data;
    const sql = 'UPDATE footballplayers SET nombre = ?, edad = ?, equipo = ? WHERE id = ?';
    db.query(sql, [nombre, edad, equipo, id], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM footballplayers WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  }
};

module.exports = FootballPlayer;
