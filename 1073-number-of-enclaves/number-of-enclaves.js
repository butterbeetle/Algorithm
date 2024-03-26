/** 00:16:01
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    let output = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    const x = (row, col) => {
        if (row < 0 || col < 0 ||
            row >= rows || col >= cols || !grid[row][col]) return;

        grid[row][col] = 0;

        x(row - 1, col);
        x(row + 1, col);
        x(row, col - 1);
        x(row, col + 1);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] && (row === rows - 1 || col === cols - 1 || !row || !col)) {
                console.log(`grid[${row}][${col}]`)
                x(row, col)
            }
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col]) {
                output++;
            }
        }
    }

    return output
}
