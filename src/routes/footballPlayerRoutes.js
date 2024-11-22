// routes/footballApiPlayerRoutes.js
const express = require('express');
const FootballPlayerController = require('../controllers/footballPlayerController');
const FootballPlayerApiController = require('../controllers/footballPlayerApiController');
const authController = require('../controllers/authController');
const authApiController = require('../controllers/authApiController');

const router = express.Router();

// Rutas de autenticación
router.get('/register', (req, res) => res.render('register', { error: null }));
router.post('/register', authController.register);
router.get('/login', (req, res) => res.render('login', { error: null }));
router.post('/login', authController.login);
router.post('/logout', authController.logout);

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
router.post('/api/login', authApiController.login);
router.post('/api/logout', authApiController.logout);
router.post('/api/register', authApiController.register);
router.post('/api/footballplayers', authApiController.verifyToken, FootballPlayerApiController.create);
router.get('/api/footballplayers', authApiController.verifyToken, FootballPlayerApiController.getAll);
router.get('/api/footballplayers/:id', authApiController.verifyToken, FootballPlayerApiController.getById);
router.put('/api/footballplayers/update/:id', authApiController.verifyToken, FootballPlayerApiController.update);
router.delete('/api/footballplayers/delete/:id', authApiController.verifyToken, FootballPlayerApiController.delete);

module.exports = router;