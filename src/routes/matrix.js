const express = require('express');
const router = express.Router();
const axios = require('axios');

// Dummy function to calculate statistics (replace with actual logic)
function calculateStatistics(matrix) {
  const sum = matrix.flat().reduce((acc, val) => acc + val, 0);
  const count = matrix.flat().length;
  const mean = sum / count;
  return { sum, count, mean };
}

router.post('/', async (req, res) => {
  const { rotatedMatrix } = req.body;

  if (!rotatedMatrix || !Array.isArray(rotatedMatrix)) {
    return res.status(400).send({ error: 'Invalid input data' });
  }

  // Calculate statistics on the rotated matrix
  const statistics = calculateStatistics(rotatedMatrix);

  res.send(statistics);
});

module.exports = router;
