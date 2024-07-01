const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const matrixRoutes = require('./routes');

const app = express();

app.use(cors()); // Habilitar CORS 
app.use(bodyParser.json());
app.use('/api', matrixRoutes);

module.exports = app;
