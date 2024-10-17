// routes/footballPlayerRoutes.js
const express = require('express');
const FootballPlayerController = require('../controllers/footballPlayerController');
const FootballPlayerApiController = require('../controllers/footballPlayerApiController');
const authController = require('../controllers/authController');

const router = express.Router();

// Rutas de autenticación
router.post('/register', authController.register);
router.post('/login', authController.login);

// Definir las rutas para CRUD de FootballPlayers View
router.get('/', authController.verifyToken, FootballPlayerController.getAll);
router.get('/footballplayers', authController.verifyToken, FootballPlayerController.getAll);
router.get('/footballplayers/add', authController.verifyToken, FootballPlayerController.getAddPlayer);
router.post('/footballplayers/add', authController.verifyToken, FootballPlayerController.addPlayer);
router.get('/footballplayers/:id', authController.verifyToken, FootballPlayerController.getById);
router.put('/footballplayers/update/:id', authController.verifyToken, FootballPlayerController.update);
router.delete('/footballplayers/delete/:id', authController.verifyToken, FootballPlayerController.delete);
router.get('/footballplayers/edit/:id', authController.verifyToken, FootballPlayerController.getEditPlayer);

// Definir las rutas para CRUD de FootballPlayers API
router.post('/api/footballplayers', authController.verifyToken, FootballPlayerApiController.create);
router.get('/api/footballplayers', authController.verifyToken, FootballPlayerApiController.getAll);
router.get('/api/footballplayers/:id', authController.verifyToken, FootballPlayerApiController.getById);
router.put('/api/footballplayers/update/:id', authController.verifyToken, FootballPlayerApiController.update);
router.delete('/api/footballplayers/delete/:id', authController.verifyToken, FootballPlayerApiController.delete);

module.exports = router;