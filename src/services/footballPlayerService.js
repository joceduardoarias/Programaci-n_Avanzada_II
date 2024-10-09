// services/footballPlayerService.js
const FootballPlayerModel = require('../models/footballPlayerModel');

const FootballPlayerService = {
  createPlayer: async (data) => {
    // Validar datos antes de enviarlos al modelo
    if (!data.nombre || !data.edad || !data.equipo) {
      throw new Error('Todos los campos son requeridos');
    }

    try {
      const player = await FootballPlayerModel.create(data);
      return player;
    } catch (err) {
      throw err;
    }
  },

  getAllPlayers: async () => {
    try {
      const players = await FootballPlayerModel.findAll();
      return players;
    } catch (err) {
      throw err;
    }
  },

  getPlayerById: async (id) => {
    try {
      const player = await FootballPlayerModel.findById(id);
      return player;
    } catch (err) {
      throw err;
    }
  },

  updatePlayer: async (id, data) => {
    if (!data.nombre || !data.edad || !data.equipo) {
      throw new Error('Todos los campos son requeridos');
    }

    try {
      const updated = await FootballPlayerModel.update(id, data);
      return updated;
    } catch (err) {
      throw err;
    }
  },

  deletePlayer: async (id) => {
    try {
      const deleted = await FootballPlayerModel.remove(id);
      return deleted;
    } catch (err) {
      throw err;
    }
  }
};

module.exports = FootballPlayerService;