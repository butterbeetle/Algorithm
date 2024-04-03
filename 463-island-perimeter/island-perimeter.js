/** 00:13:43
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const Island = (row, col) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols || !grid[row][col]) return 1;
        if (grid[row][col] === 2) return 0;

        grid[row][col] = 2;

        const up = Island(row - 1, col);
        const down = Island(row + 1, col);
        const left = Island(row, col - 1);
        const right = Island(row, col + 1);

        return up + down + left + right
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col]) return Island(row, col)
        }
    }
};