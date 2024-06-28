const express = require('express');
const bodyParser = require('body-parser');
const matrixRoutes = require('./routes/matrix');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/matrix', matrixRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
