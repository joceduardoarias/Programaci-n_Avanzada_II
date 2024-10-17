// controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const authController = {
  register: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.create({ username, password });
      res.redirect('/login');
    } catch (err) {
      res.render('register', { error: err.message });
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) return res.render('login', { error: 'Usuario no encontrado.' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.render('login', { error: 'Contraseña incorrecta.' });

      const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });
      res.cookie('token', token, { httpOnly: true });
      res.redirect('/footballplayers');
    } catch (err) {
      res.render('login', { error: err.message });
    }
  },

  logout: (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');
  },

  verifyToken: (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.redirect('/login');

    try {
      const verified = jwt.verify(token, 'secretKey');
      req.user = verified;
      next();
    } catch (err) {
      res.redirect('/login');
    }
  }
};

module.exports = authController;