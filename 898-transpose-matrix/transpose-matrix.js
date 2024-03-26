/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const output = Array.from({ length: cols }, () => new Array(rows).fill(0))

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            output[col][row] = matrix[row][col]
        }
    }

    return output
};