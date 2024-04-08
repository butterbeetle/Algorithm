/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
    const rows = grid1.length;
    const cols = grid1[0].length;

    const erosion = (row, col) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols || !grid2[row][col] || grid2[row][col] === 2) return;

        grid2[row][col] = 2;

        erosion(row - 1, col)
        erosion(row + 1, col)
        erosion(row, col - 1)
        erosion(row, col + 1)
    }

    const check = (row, col) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols || !grid2[row][col]) return;

        grid2[row][col] = 0;

        check(row - 1, col)
        check(row + 1, col)
        check(row, col - 1)
        check(row, col + 1)
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid2[row][col] && !grid1[row][col]) erosion(row, col);
        }
    }

    let count = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid2[row][col] === 1) {
                count++;
                check(row, col);
            }
        }
    }

    return count
};