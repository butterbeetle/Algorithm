/** 00:06:21
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const max = new Array(cols).fill(0)
    const gps = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (matrix[row][col] < 0) gps.push([row, col])
            else max[col] = Math.max(matrix[row][col], max[col])
        }
    }

    for (const [x, y] of gps) {
        matrix[x][y] = max[y]
    }

    return matrix
};