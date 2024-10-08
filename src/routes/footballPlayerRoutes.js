// routes/footballPlayerRoutes.js
const express = require('express');
const FootballPlayerController = require('../controllers/footballPlayerController');
const FootballPlayerApiController = require('../controllers/FootballPlayerApiController');

const router = express.Router();

// Definir las rutas para CRUD de FootballPlayers View
router.post('/footballplayers', FootballPlayerController.create);
router.get('/footballplayers', FootballPlayerController.getAll);
router.get('/footballplayers/:id', FootballPlayerController.getById);
router.post('/footballplayers/update/:id', FootballPlayerController.update);
router.delete('/footballplayers/:id', FootballPlayerController.delete);
router.get('/footballplayers/edit/:id', FootballPlayerController.getEditPlayer);

// Definir las rutas para CRUD de FootballPlayers API
router.post('/api/footballplayers', FootballPlayerApiController.create);
router.get('/api/footballplayers', FootballPlayerApiController.getAll);
router.get('/api/footballplayers/:id', FootballPlayerApiController.getById);
router.put('/api/footballplayers/update/:id', FootballPlayerApiController.update);
router.delete('/api/footballplayers/:id', FootballPlayerApiController.delete);

module.exports = router;