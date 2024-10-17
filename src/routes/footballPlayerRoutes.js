// routes/footballPlayerRoutes.js
const express = require('express');
const FootballPlayerController = require('../controllers/footballPlayerController');
const FootballPlayerApiController = require('../controllers/footballPlayerApiController');

const router = express.Router();

// Definir las rutas para CRUD de FootballPlayers View
router.get('/', FootballPlayerController.getAll);
router.get('/footballplayers', FootballPlayerController.getAll);
router.get('/footballplayers/add', FootballPlayerController.getAddPlayer);
router.post('/footballplayers/add', FootballPlayerController.addPlayer);
router.get('/footballplayers/:id', FootballPlayerController.getById);
router.put('/footballplayers/update/:id', FootballPlayerController.update);
router.delete('/footballplayers/delete/:id', FootballPlayerController.delete);
router.get('/footballplayers/edit/:id', FootballPlayerController.getEditPlayer);

// Definir las rutas para CRUD de FootballPlayers API
router.post('/api/footballplayers', FootballPlayerApiController.create);
router.get('/api/footballplayers', FootballPlayerApiController.getAll);
router.get('/api/footballplayers/:id', FootballPlayerApiController.getById);
router.put('/api/footballplayers/update/:id', FootballPlayerApiController.update);
router.delete('/api/footballplayers/delete/:id', FootballPlayerApiController.delete);

module.exports = router;