/** 00:31:15
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    let output = 0;
    const row = [];
    const col = [];

    for (let i = 0; i < grid.length; i++) {
        row[i] = Math.max(...grid[i])
        for (let j = 0; j < grid.length; j++) {
            col[j] = Math.max(col[j] ?? 0, grid[i][j])
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            output += Math.min(row[i], col[j]) - grid[i][j]
        }
    }

    return output
};