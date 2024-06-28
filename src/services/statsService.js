exports.calculateStats = (matrix) => {
    const flattenedMatrix = matrix.flat();
    const sum = flattenedMatrix.reduce((acc, val) => acc + val, 0);
    const count = flattenedMatrix.length;
    const mean = sum / count;
    const max = Math.max(...flattenedMatrix);
    const min = Math.min(...flattenedMatrix);
    const isDiagonal = matrix.every((row, i) => row.every((val, j) => (i === j ? true : val === 0)));

    return {
        max,
        min,
        mean,
        sum,
        isDiagonal
    };
};
