// server.js
const express = require('express');
const bodyParser = require('body-parser'); 
const path = require('path');
const footballPlayerRoutes = require('./src/routes/footballPlayerRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Usar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Usar las rutas definidas
app.use('/', footballPlayerRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
