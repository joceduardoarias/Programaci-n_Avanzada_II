// server.js
const express = require('express');
const bodyParser = require('body-parser');
const footballPlayerRoutes = require('./routes/footballPlayerRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Usar las rutas definidas
app.use('/', footballPlayerRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
