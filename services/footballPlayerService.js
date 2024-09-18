// services/footballPlayerService.js
const FootballPlayerModel = require('../models/footballPlayerModel');

const FootballPlayerService = {
  createPlayer: (data, callback) => {
    // Validar datos antes de enviarlos al modelo
    if (!data.nombre || !data.edad || !data.equipo) {
      return callback(new Error('Todos los campos son requeridos'));
    }

    FootballPlayerModel.create(data, callback);
  },

  getAllPlayers: (callback) => {
    FootballPlayerModel.findAll(callback);
  },

  getPlayerById: (id, callback) => {
    FootballPlayerModel.findById(id, callback);
  },

  updatePlayer: (id, data, callback) => {
    if (!data.nombre || !data.edad || !data.equipo) {
      return callback(new Error('Todos los campos son requeridos'));
    }

    FootballPlayerModel.update(id, data, callback);
  },

  deletePlayer: (id, callback) => {
    FootballPlayerModel.delete(id, callback);
  }
};

module.exports = FootballPlayerService;
