// controllers/authController.js
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const authApiController = {
  register: async (req, res) => {
    const { username, password } = req.body;    
      const user = new User({ username, password });
      await user.save();
      if (err) return res.status(400).send(err.message);
      res.status(201).send('Usuario creado exitosamente.');    
  },

  login: async (req, res) => {
    const { username, password } = req.body;    
      const user = await User.findOne({ username });
      if (!user) return res.status(404).send("Usuario no encontrado.");

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).send('Contraseña incorrecta.');      

      req.session.userId = user._id;
      req.session.role = user.role;
      res.status(200).send('Sesión iniciada exitosamente.');    
  },

  logout: (req, res) => {
    req.session.destroy(err => {
      if (err) {
        return res.status(500).send('Error al cerrar sesión.');
      }
      res.clearCookie('connect.sid');
      res.send('Sesión cerrada exitosamente.');
    });
  },

  verifyToken: (req, res, next) => {
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

module.exports = authApiController;