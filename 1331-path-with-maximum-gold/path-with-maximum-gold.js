/** 00:18:50
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
    let output = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    const mining = (row, col) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols || !grid[row][col]) return 0;

        const tmp = grid[row][col];

        grid[row][col] = 0;

        const max = Math.max(mining(row - 1, col), mining(row + 1, col), mining(row, col - 1), mining(row, col + 1));

        grid[row][col] = tmp;

        return grid[row][col] + max
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const tmp = grid.map(v => [...v]);
            if (grid[row][col]) output = Math.max(output, mining(row, col))
        }
    }

    return output
};