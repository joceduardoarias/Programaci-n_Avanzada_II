// db.js
const mysql = require('mysql2');

// Crear la conexión a la base de datos
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',     // Usuario predeterminado de XAMPP
  password: '',     // Deja vacío si no configuraste una contraseña
  database: 'estudiantes_db',
  waitForConnections: true,  // Espera si no hay conexiones disponibles
  connectionLimit: 10,       // Número máximo de conexiones en el pool
  queueLimit: 0              // Número máximo de solicitudes en espera
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL.');
});

module.exports = connection;
