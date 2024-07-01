const statsService = require('../services/statsService');

exports.calculateStats = (req, res) => {
    const { rotatedMatrix } = req.body;

    if (!rotatedMatrix || !Array.isArray(rotatedMatrix)) {
        return res.status(400).send({ error: 'Invalid input data' });
    }

    const stats = statsService.calculateStats(rotatedMatrix);

    res.send(stats);
};

exports.calculateQRStats = (req, res) => {
    const { Q, R } = req.body;

    if (!Q || !Array.isArray(Q) || !R || !Array.isArray(R)) {
        return res.status(400).send({ error: 'Invalid input data' });
    }

    const stats = statsService.calculateQRStats(Q, R);

    console.log(stats)

    res.send(stats);
};