/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    let t = Number.POSITIVE_INFINITY;
    let b = Number.NEGATIVE_INFINITY;
    let l = Number.POSITIVE_INFINITY;
    let r = Number.NEGATIVE_INFINITY;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col]) {
                t = Math.min(row, t);
                b = Math.max(row, b);
                l = Math.min(col, l);
                r = Math.max(col, r);
            }
        }
    }
    // console.log(b, t, r, l)
    return (b - t + 1) * (r - l + 1)
};