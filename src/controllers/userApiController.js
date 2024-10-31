// controllers/userApiController.js
const userService = require("../services/userService");

const userController = {
  listUsers: async (req, res) => {
    const users = await userService.getAllUsers();
    if (!users) return res.status(404).send("No hay usuarios.");
    res.send(users);
  },

  getAddUser: (req, res) => {
    res.render("add-user", { error: null });
  },

  addUser: async (req, res) => {
    const { username, password, role } = req.body;
    await userService.createUser({ username, password, role });
    if (err) return res.status(400).send(err.message);
    res.status(201).send("Usuario creado exitosamente.");
  },

  getEditUser: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await userService.getUserById(id);
      if (!user) return res.status(404).send("Usuario no encontrado.");
      res.send("Usuario ");
    } catch (err) {
      res.status(500).send(err.message);
    }
  },

  updateUser: async (req, res) => {
    const id = req.params.id;
    const { username, role } = req.body;
    await userService.updateUser(id, { username, role });
    if (err) return res.status(400).send(err.message);
    res.send("Usuario actualizado exitosamente.");
  },

  deleteUser: async (req, res) => {
    const id = req.params.id;
    await userService.deleteUser(id);
    if (err) return res.status(500).send(err.message);
    res.send("Usuario eliminado exitosamente.");
  },
};

module.exports = userController;
