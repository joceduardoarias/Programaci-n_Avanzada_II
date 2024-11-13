// controllers/authController.js
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const authController = {
  register: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = new User({ username, password });
      await user.save();
      res.redirect('/login');
    } catch (err) {
      res.render('register', { error: err.message });
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) return res.render('login', { error: 'Usuario no encontrado.' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.render('login', { error: 'Contraseña incorrecta.' });

      req.session.userId = user._id;
      req.session.role = user.role;
      res.redirect('/footballplayers');
    } catch (err) {
      res.render('login', { error: err.message });
    }
  },

  logout: (req, res) => {
    req.session.destroy(err => {
      if (err) {
        return res.redirect('/footballplayers');
      }
      res.clearCookie('connect.sid');
      res.redirect('/login');
    });
  },

  validateSession: (req, res, next) => {
    if (!req.session.userId) {
      return res.redirect('/login');
    }
    next();
  },

  verifyAdmin: (req, res, next) => {
    if (req.session.role !== 'admin') {
      return res.status(403).send('Acceso denegado.');
    }
    next();
  }
};

module.exports = authController;