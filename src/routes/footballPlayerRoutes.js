// routes/footballPlayerRoutes.js
const express = require('express');
const FootballPlayerController = require('../controllers/footballPlayerController');

const router = express.Router();

// Definir las rutas para CRUD de FootballPlayers
router.post('/footballplayers', FootballPlayerController.create);
router.get('/footballplayers', FootballPlayerController.getAll);
router.get('/footballplayers/:id', FootballPlayerController.getById);
router.put('/footballplayers/:id', FootballPlayerController.update);
router.delete('/footballplayers/:id', FootballPlayerController.delete);

module.exports = router;
