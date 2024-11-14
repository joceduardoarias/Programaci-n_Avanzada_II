// controllers/authApiController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const authApiController = {
  register: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = new User({ username, password });
      await user.save();
      res.status(201).send('Usuario creado exitosamente.');
    } catch (err) {
      res.status(400).send(err.message);
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) return res.status(404).send("Usuario no encontrado.");

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).send('Contraseña incorrecta.');

      const token = jwt.sign({ id: user._id, role: user.role }, 'secretKey', { expiresIn: '1h' });
      res.json({ token });
    } catch (err) {
      res.status(500).send(err.message);
    }
  },

  logout: (req, res) => {
    // No es necesario destruir el token en el servidor, solo eliminarlo del cliente
    res.send('Sesión cerrada exitosamente.');
  },

  verifyToken: (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).send('Acceso denegado.');

    try {
      const verified = jwt.verify(token, 'secretKey');
      req.user = verified;
      next();
    } catch (err) {
      res.status(400).send('Token inválido.');
    }
  },

  verifyAdmin: (req, res, next) => {
    if (req.user.role !== 'admin') {
      return res.status(403).send('Acceso denegado.');
    }
    next();
  }
};

module.exports = authApiController;