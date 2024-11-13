// routes/footballPlayerRoutes.js
const express = require('express');
const FootballPlayerController = require('../controllers/footballPlayerController');
const FootballPlayerApiController = require('../controllers/footballPlayerApiController');
const authController = require('../controllers/authController');
const authApiController = require('../controllers/authApiController');
const userController = require('../controllers/userController');
const userApiController = require('../controllers/userApiController');

const router = express.Router();

// Rutas de autenticación
router.get('/register', (req, res) => res.render('register', { error: null }));
router.post('/register', authController.register);
router.get('/login', (req, res) => res.render('login', { error: null }));
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/api/login', authApiController.login);
router.post('/api/logout', authApiController.logout);
router.post('/api/register', authApiController.register);

// Definir las rutas para CRUD de FootballPlayers View
router.get('/', authController.validateSession, FootballPlayerController.getAll);
router.get('/footballplayers', authController.validateSession, FootballPlayerController.getAll);
router.get('/footballplayers/add', authController.validateSession, FootballPlayerController.getAddPlayer);
router.post('/footballplayers/add', authController.validateSession, FootballPlayerController.addPlayer);
router.get('/footballplayers/:id', authController.validateSession, FootballPlayerController.getById);
router.put('/footballplayers/update/:id', authController.validateSession, FootballPlayerController.update);
router.delete('/footballplayers/delete/:id', authController.validateSession, FootballPlayerController.delete);
router.get('/footballplayers/edit/:id', authController.validateSession, FootballPlayerController.getEditPlayer);

// Definir las rutas para CRUD de FootballPlayers API
router.post('/api/footballplayers', authController.validateSession, FootballPlayerApiController.create);
router.get('/api/footballplayers', authController.validateSession, FootballPlayerApiController.getAll);
router.get('/api/footballplayers/:id', authController.validateSession, FootballPlayerApiController.getById);
router.put('/api/footballplayers/update/:id', authController.validateSession, FootballPlayerApiController.update);
router.delete('/api/footballplayers/delete/:id', authController.validateSession, FootballPlayerApiController.delete);

// Rutas de administración de usuarios (solo accesibles por admin)
router.get('/admin/users', authController.validateSession, authController.verifyAdmin, userController.listUsers);
router.get('/admin/users/add', authController.validateSession, authController.verifyAdmin, userController.getAddUser);
router.post('/admin/users/add', authController.validateSession, authController.verifyAdmin, userController.addUser);
router.get('/admin/users/edit/:id', authController.validateSession, authController.verifyAdmin, userController.getEditUser);
router.put('/admin/users/update/:id', authController.validateSession, authController.verifyAdmin, userController.updateUser);
router.delete('/admin/users/delete/:id', authController.validateSession, authController.verifyAdmin, userController.deleteUser);

// router.get('api/admin/users', authApiController.validateSession, authApiController.verifyAdmin, userApiController.listUsers);
// router.get('api/admin/users/add', authApiController.validateSession, authApiController.verifyAdmin, userApiController.getAddUser);
// router.post('api/admin/users/add', authApiController.validateSession, authApiController.verifyAdmin, userApiController.addUser);
// router.get('api/admin/users/edit/:id', authApiController.validateSession, authApiController.verifyAdmin, userApiController.getEditUser);
// router.put('api/admin/users/update/:id', authApiController.validateSession, authApiController.verifyAdmin, userApiController.updateUser);
// router.delete('api/admin/users/delete/:id', authApiController.validateSession, authApiController.verifyAdmin, userApiController.deleteUser);

module.exports = router;