// models/footballPlayerModel.js
const mongoose = require('mongoose');

const footballPlayerSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  equipo: {
    type: String,
    required: true
  }
}, {
  collection: 'footballplayers',
  timestamps: false
});

const FootballPlayer = mongoose.model('FootballPlayer', footballPlayerSchema);

const create = async (data) => {
  try {
    const player = new FootballPlayer(data);
    await player.save();
    return player;
  } catch (err) {
    throw err;
  }
};

const findAll = async () => {
  try {
    const players = await FootballPlayer.find();
    return players;
  } catch (err) {
    throw err;
  }
};

const findById = async (id) => {
  try {
    const player = await FootballPlayer.findById(id);
    return player;
  } catch (err) {
    throw err;
  }
};

const update = async (id, data) => {
  try {
    const player = await FootballPlayer.findByIdAndUpdate(id, data, { new: true });
    return player;
  } catch (err) {
    throw err;
  }
};

const remove = async (id) => {
  try {
    const player = await FootballPlayer.findByIdAndDelete(id);
    return player;
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