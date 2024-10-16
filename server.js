const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const path = require('path');
const footballPlayerRoutes = require('./src/routes/footballPlayerRoutes');

const app = express();
const port = 3000;

// Body-parser para analizar formularios (necesario para acceder al campo _method)
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware para el manejo de datos en formato JSON
app.use(bodyParser.json());
// Configuración de method-override
app.use(methodOverride('_method'));
// Middleware estático y configuración de vistas
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Definir rutas
app.use('/', footballPlayerRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
