// config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.DB_URI;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => console.log('Conexión exitosa a la base de datos MongoDB.'))
  .catch(err => console.error('Error conectando a la base de datos:', err));

module.exports = mongoose;