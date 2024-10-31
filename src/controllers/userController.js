// controllers/userController.js
const userService = require('../services/userService');

const userController = {
  listUsers: async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.render('list-users', { users });
    } catch (err) {
      res.status(500).send(err.message);
    }
  },

  getAddUser: (req, res) => {
    res.render('add-user', { error: null });
  },

  addUser: async (req, res) => {
    const { username, password, role } = req.body;
    try {
      await userService.createUser({ username, password, role });
      res.redirect('/admin/users');
    } catch (err) {
      res.render('add-user', { error: err.message });
    }
  },

  getEditUser: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await userService.getUserById(id);
      if (!user) return res.status(404).send('Usuario no encontrado.');
      res.render('edit-user', { user, error: null });
    } catch (err) {
      res.status(500).send(err.message);
    }
  },

  updateUser: async (req, res) => {
    const id = req.params.id;
    const { username, role } = req.body;
    try {
      await userService.updateUser(id, { username, role });
      res.redirect('/admin/users');
    } catch (err) {
      res.render('edit-user', { user: { _id: id, username, role }, error: err.message });
    }
  },

  deleteUser: async (req, res) => {
    const id = req.params.id;
    try {
      await userService.deleteUser(id);
      res.redirect('/admin/users');
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
};

module.exports = userController;