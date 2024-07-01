const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController');

router.post('/matrix', statsController.calculateStats);
router.post('/qr', statsController.calculateQRStats); 

module.exports = router;
