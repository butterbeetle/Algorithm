/** 00:43:35
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    let output = 0;

    const tsunami = (row, col) => {
        if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] == 0) return
        grid[row][col] = "0";
        tsunami(row - 1, col);
        tsunami(row + 1, col);
        tsunami(row, col - 1);
        tsunami(row, col + 1);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                output++;
                tsunami(i, j);
            }
        }
    }

    return output
};