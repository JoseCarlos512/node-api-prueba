const statsService = require('../services/statsService');

exports.calculateStats = (req, res) => {
    const { rotatedMatrix } = req.body;

    if (!rotatedMatrix || !Array.isArray(rotatedMatrix)) {
        return res.status(400).send({ error: 'Invalid input data' });
    }

    const stats = statsService.calculateStats(rotatedMatrix);

    res.send(stats);
};
