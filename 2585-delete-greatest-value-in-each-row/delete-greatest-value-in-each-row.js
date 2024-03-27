/** 00:05:34
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    let output = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    grid = grid.map(g => g.sort((a, b) => b - a))

    for (let col = 0; col < cols; col++) {
        let max = 0;

        for (let row = 0; row < rows; row++) {
            max = Math.max(max, grid[row][col])
        }

        output += max;
    }

    return output
};