/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
    let output = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    const infection = (row, col) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col]) return;

        grid[row][col] = 1;

        infection(row - 1, col);
        infection(row + 1, col);
        infection(row, col - 1);
        infection(row, col + 1);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if ((!row || !col || row === rows - 1 || col === cols - 1) && !grid[row][col]) {
                infection(row, col, 1)
            }
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (!grid[row][col]) {
                output++;
                infection(row, col)
            }
        }
    }

    return output
};