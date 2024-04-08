/** 00:03:37
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    for (let col = 1; col < cols; col++) {
        grid[0][col] += grid[0][col - 1]
    }

    for (let row = 1; row < rows; row++) {
        grid[row][0] += grid[row - 1][0]
    }

    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1])
        }
    }

    return grid[rows - 1][cols - 1]
};