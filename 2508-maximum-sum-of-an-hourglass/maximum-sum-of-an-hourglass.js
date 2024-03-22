/** 00:08:52
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function (grid) {
    let hourglass = 0;
    const rows = grid.length
    const cols = grid[0].length;

    const getSize = (row, col) => {
        return grid[row - 1][col - 1] + grid[row - 1][col] + grid[row - 1][col + 1]
            + grid[row][col]
            + grid[row + 1][col - 1] + grid[row + 1][col] + grid[row + 1][col + 1]
    }

    for (let i = 1; i < rows - 1; i++) {
        for (let j = 1; j < cols - 1; j++) {
            hourglass = Math.max(getSize(i, j), hourglass)
        }
    }

    return hourglass
};