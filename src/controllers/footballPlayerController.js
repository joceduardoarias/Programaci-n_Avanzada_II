// controllers/footballPlayerController.js
const FootballPlayerService = require("../services/footballPlayerService");

const FootballPlayerController = {
  
  create: (req, res) => {
    FootballPlayerService.createPlayer(req.body, (err, result) => {
      if (err) return res.status(400).send(err.message);
      res.status(201).send("Football Player creado exitosamente.");
    });
  },

  getAll: (req, res) => {
    FootballPlayerService.getAllPlayers((err, players) => {
      if (err) return res.status(500).send(err.message);      
      res.render("get-players", { players });
    });
  },

  getById: (req, res) => {
    const id = req.params.id;
    FootballPlayerService.getPlayerById(id, (err, player) => {
      if (err) return res.status(500).send(err.message);
      if (!player)
        return res.status(404).send("Football Player no encontrado.");
      res.json(player);
    });
  },

  update: (req, res) => {    
    const id = req.params.id;
    FootballPlayerService.updatePlayer(id, req.body, (err, result) => {      
      if (err) return res.status(400).send(err.message);
      res.send('Football Player actualizado exitosamente.');
    });
  },

  delete: (req, res) => {
    const id = req.params.id;
    FootballPlayerService.deletePlayer(id, (err, result) => {
      if (err) return res.status(500).send(err.message);
      res.send("Football Player eliminado exitosamente.");
    });
  },

  // Acción GET para obtener el formulario de edición
  getEditPlayer: (req, res) => {
    const id = req.params.id;
    FootballPlayerService.getPlayerById(id, (err, player) => {
      if (err)
        return res.status(500).send("Error al obtener los datos del jugador");
      res.render("edit-player", { player });
    });
  },
};

module.exports = FootballPlayerController;
