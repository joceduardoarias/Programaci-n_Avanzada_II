// controllers/footballPlayerApiController.js
const FootballPlayerService = require('../services/footballPlayerService');

const FootballPlayerApiController = {
  create: async (req, res) => {
    try {
      await FootballPlayerService.createPlayer(req.body);
      res.status(201).send('Football Player creado exitosamente.');
    } catch (err) {
      res.status(400).send(err.message);
    }
  },

  getAll: async (req, res) => {
    try {
      const players = await FootballPlayerService.getAllPlayers();
      res.json(players);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },

  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const player = await FootballPlayerService.getPlayerById(id);
      if (!player) return res.status(404).send('Football Player no encontrado.');
      res.json(player);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },

  update: async (req, res) => {
    const id = req.params.id;
    try {
      await FootballPlayerService.updatePlayer(id, req.body);
      res.send('Football Player actualizado exitosamente.');
    } catch (err) {
      res.status(400).send(err.message);
    }
  },

  delete: async (req, res) => {
    const id = req.params.id;
    try {
      await FootballPlayerService.deletePlayer(id);
      res.send('Football Player eliminado exitosamente.');
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
};

module.exports = FootballPlayerApiController;