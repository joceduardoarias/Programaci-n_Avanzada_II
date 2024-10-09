// models/footballPlayerModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const FootballPlayer = sequelize.define('FootballPlayer', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  equipo: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'footballplayers',
  timestamps: false
});

const create = async (data) => {
  try {
    const player = await FootballPlayer.create(data);
    return player;
  } catch (err) {
    throw err;
  }
};

const findAll = async () => {
  try {
    const players = await FootballPlayer.findAll();
    return players;
  } catch (err) {
    throw err;
  }
};

const findById = async (id) => {
  try {
    const player = await FootballPlayer.findByPk(id);
    return player;
  } catch (err) {
    throw err;
  }
};

const update = async (id, data) => {
  try {
    const [updated] = await FootballPlayer.update(data, {
      where: { id: id }
    });
    return updated;
  } catch (err) {
    throw err;
  }
};

const remove = async (id) => {
  try {
    const deleted = await FootballPlayer.destroy({
      where: { id: id }
    });
    return deleted;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove
};