const mysql = require('mysql2');
require('dotenv').config(); // Cargar variables de entorno

// Crear la conexión a la base de datos
const pool = mysql.createPool({
  host: process.env.DB_HOST, // Dirección del servidor MySQL
  user: process.env.DB_USER, // Usuario predeterminado de XAMPP
  password: process.env.DB_PASSWORD, // Contraseña de la base de datos
  database: process.env.DB_NAME, // Nombre de la base de datos
  waitForConnections: true, // Espera si no hay conexiones disponibles
  connectionLimit: 10, // Número máximo de conexiones en el pool
  queueLimit: 0 // Número máximo de solicitudes en espera
});

// Conectar a la base de datos
pool.getConnection((err, connection) => {
  if (err) {
    console.log('DB_HOST:', process.env.DB_HOST);
    console.log('DB_USER:', process.env.DB_USER);
    console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
    console.log('DB_NAME:', process.env.DB_NAME);
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  
  console.log('Conexión exitosa a la base de datos MySQL.');
  connection.release(); // Libera la conexión de vuelta al pool  
});

module.exports = pool; // Exportar el pool