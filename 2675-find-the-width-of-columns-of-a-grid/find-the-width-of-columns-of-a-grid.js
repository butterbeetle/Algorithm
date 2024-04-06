/** 00:03:02
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {
    const output = [];
    const rows = grid.length;
    const cols = grid[0].length;

    for (let col = 0; col < cols; col++) {
        let max = 0;
        for (let row = 0; row < rows; row++) {
            max = Math.max(max, (grid[row][col] + "").split("").length)
        }
        output.push(max)
    }

    return output
};