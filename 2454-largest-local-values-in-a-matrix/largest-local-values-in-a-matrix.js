/** 00:04:55
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    const n = grid.length;
    const output = Array.from({ length: n - 2 }, () => new Array(n - 2).fill(0))

    for (let row = 1; row < n - 1; row++) {
        for (let col = 1; col < n - 1; col++) {
            const max = Math.max(
                grid[row - 1][col - 1], grid[row - 1][col], grid[row - 1][col + 1],
                grid[row][col - 1], grid[row][col], grid[row][col + 1],
                grid[row + 1][col - 1], grid[row + 1][col], grid[row + 1][col + 1]
            )
            output[row - 1][col - 1] = max;
        }
    }

    return output
};