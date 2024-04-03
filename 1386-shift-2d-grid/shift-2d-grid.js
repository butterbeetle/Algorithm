/** 00:20:41
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    const output = [];
    const flat = grid.flat()
    const cols = grid[0].length;

    while (k--) flat.unshift(flat.pop())
    while (flat.length) output.push(flat.splice(0, cols))

    return output
};