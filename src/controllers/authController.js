// controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const authController = {
  register: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.create({ username, password });
      res.status(201).send('Usuario registrado exitosamente.');
    } catch (err) {
      res.status(400).send(err.message);
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) return res.status(404).send('Usuario no encontrado.');

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).send('Contraseña incorrecta.');

      const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });
      res.json({ token });
    } catch (err) {
      res.status(500).send(err.message);
    }
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
  }
};

module.exports = authController;