// controllers/footballPlayerController.js
const FootballPlayerService = require("../services/footballPlayerService");

const FootballPlayerController = {
  create: async (req, res) => {
    try {
      await FootballPlayerService.createPlayer(req.body);
      res.status(201).send("Football Player creado exitosamente.");
    } catch (err) {
      res.status(400).send(err.message);
    }
  },

  getAll: async (req, res) => {
    try {
      const players = await FootballPlayerService.getAllPlayers();
      res.render("get-players", { players });
    } catch (err) {
      res.status(500).send(err.message);
    }
  },

  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const player = await FootballPlayerService.getPlayerById(id);
      if (!player) return res.status(404).send("Football Player no encontrado.");
      res.json(player);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },

  update: async (req, res) => {
    const id = req.params.id;
    try {
      await FootballPlayerService.updatePlayer(id, req.body);
      const players = await FootballPlayerService.getAllPlayers();
      res.render("get-players", { players });
    } catch (err) {
      res.status(400).send(err.message);
    }
  },

  delete: async (req, res) => {
    const id = req.params.id;
    try {
      await FootballPlayerService.deletePlayer(id);
      const players = await FootballPlayerService.getAllPlayers();
      res.render("get-players", { players });
    } catch (err) {
      res.status(500).send(err.message);
    }
  },

  getEditPlayer: async (req, res) => {
    const id = req.params.id;
    try {
      const player = await FootballPlayerService.getPlayerById(id);
      if (!player) return res.status(404).send("Football Player no encontrado.");
      res.render("edit-player", { player });
    } catch (err) {
      res.status(500).send("Error al obtener los datos del jugador");
    }
  },

  getAddPlayer: (req, res) => {
    res.render("add-player");
  },

  addPlayer: async (req, res) => {
    try {
      await FootballPlayerService.createPlayer(req.body);
      res.redirect("/footballplayers");
    } catch (err) {
      res.status(400).send(err.message);
    }
  },
};

module.exports = FootballPlayerController;