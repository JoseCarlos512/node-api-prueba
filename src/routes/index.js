const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController');

router.post('/matrix', statsController.calculateStats);

module.exports = router;