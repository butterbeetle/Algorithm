/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const grid = Array.from({ length: m }, () => new Array(n).fill(0))

    for (let i = 0; i < m; i++) {
        grid[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        grid[0][j] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] = grid[i - 1][j] + grid[i][j - 1]
        }
    }

    return grid[m - 1][n - 1]
};