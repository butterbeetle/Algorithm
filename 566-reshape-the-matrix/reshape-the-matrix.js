/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    const rows = mat.length;
    const cols = mat[0].length;

    if (rows * cols !== r * c) return mat;

    let sr = 0;
    let sc = 0;

    const grid = Array.from({ length: r }, () => new Array(c).fill(0));

    for (let row = 0; row < r; row++) {
        for (let col = 0; col < c; col++) {
            grid[row][col] = mat[sr][sc]
            sc++;
            if (sc === cols) {
                sr++;
                sc = 0;
            }
        }
    }

    return grid
};