exports.isMatrixValid = (matrix) => {
    return Array.isArray(matrix) && matrix.every(row => Array.isArray(row));
};
