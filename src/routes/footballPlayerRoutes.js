// routes/footballPlayerRoutes.js
const express = require('express');
const FootballPlayerController = require('../controllers/footballPlayerController');
const FootballPlayerApiController = require('../controllers/footballPlayerApiController');
const authController = require('../controllers/authController');

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
router.post('/api/footballplayers', authController.verifyToken, FootballPlayerApiController.create);
router.get('/api/footballplayers', authController.verifyToken, FootballPlayerApiController.getAll);
router.get('/api/footballplayers/:id', authController.verifyToken, FootballPlayerApiController.getById);
router.put('/api/footballplayers/update/:id', authController.verifyToken, FootballPlayerApiController.update);
router.delete('/api/footballplayers/delete/:id', authController.verifyToken, FootballPlayerApiController.delete);

// Rutas de administración de usuarios (solo accesibles por admin)
router.get('/admin/users', authController.verifyToken, authController.verifyAdmin, (req, res) => {
  // Lógica para listar usuarios
});
router.get('/admin/users/add', authController.verifyToken, authController.verifyAdmin, (req, res) => {
  res.render('add-user', { error: null });
});
router.post('/admin/users/add', authController.verifyToken, authController.verifyAdmin, (req, res) => {
  // Lógica para agregar un nuevo usuario
});
router.get('/admin/users/edit/:id', authController.verifyToken, authController.verifyAdmin, (req, res) => {
  // Lógica para obtener los datos del usuario y renderizar la vista de edición
});
router.put('/admin/users/update/:id', authController.verifyToken, authController.verifyAdmin, (req, res) => {
  // Lógica para actualizar los datos del usuario
});
router.delete('/admin/users/delete/:id', authController.verifyToken, authController.verifyAdmin, (req, res) => {
  // Lógica para eliminar un usuario
});

module.exports = router;