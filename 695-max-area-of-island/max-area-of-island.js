/** 00:26:30
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let output = 0;
    let area = 0;

    const m = grid.length;
    const n = grid[0].length;

    const findIsland = (row, col) => {
        if (row < 0 || col < 0 ||
            row >= m || col >= n ||
            grid[row][col] === 0) return;

        area += 1;
        grid[row][col] = 0;

        findIsland(row + 1, col); // down
        findIsland(row - 1, col); // up
        findIsland(row, col + 1); // right
        findIsland(row, col - 1); // left

        return;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            area = 0;
            if (grid[i][j] === 1) {
                findIsland(i, j, area);
            }
            output = Math.max(output, area)
        }
    }

    return output
};