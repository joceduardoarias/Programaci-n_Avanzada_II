// services/userService.js
const User = require('../models/userModel');

const userService = {
  createUser: async (data) => {
    const { username, password, role } = data;
    if (!username || !password || !role) {
      throw new Error('Todos los campos son requeridos');
    }

    try {
      const user = new User({ username, password, role });
      await user.save();
      return user;
    } catch (err) {
      throw err;
    }
  },

  getAllUsers: async () => {
    try {
      const users = await User.find();
      return users;
    } catch (err) {
      throw err;
    }
  },

  getUserById: async (id) => {
    try {
      const user = await User.findById(id);
      return user;
    } catch (err) {
      throw err;
    }
  },

  updateUser: async (id, data) => {
    const { username, role } = data;
    if (!username || !role) {
      throw new Error('Todos los campos son requeridos');
    }

    try {
      const user = await User.findByIdAndUpdate(id, data, { new: true });
      return user;
    } catch (err) {
      throw err;
    }
  },

  deleteUser: async (id) => {
    try {
      const user = await User.findByIdAndDelete(id);
      return user;
    } catch (err) {
      throw err;
    }
  }
};

module.exports = userService;