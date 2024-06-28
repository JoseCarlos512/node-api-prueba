const express = require('express');
const bodyParser = require('body-parser');
const matrixRoutes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/api', matrixRoutes);

module.exports = app;
