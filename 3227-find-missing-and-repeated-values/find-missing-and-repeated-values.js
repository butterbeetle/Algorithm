/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const n = grid.length;
    const arr = new Array(n * n).fill(0);

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            arr[grid[row][col] - 1]++
        }
    }

    return [arr.indexOf(2) + 1, arr.indexOf(0) + 1]
};