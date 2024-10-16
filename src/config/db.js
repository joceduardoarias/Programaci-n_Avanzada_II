// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('estudiantes_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos MySQL.');
  })
  .catch(err => {
    console.error('Error conectando a la base de datos:', err);
  });

module.exports = sequelize;