/** 00:23:10
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const onesRow = new Array(rows).fill(0)  //[2, 2, 1]
    const onesCol = new Array(cols).fill(0)  //[1, 1, 3]

    const arr = Array.from({ length: rows }, () => new Array(cols).fill(0))

    for (let i = 0; i < rows; i++) {
        let sum = 0;
        for (let j = 0; j < cols; j++) {
            sum += grid[i][j]
            onesCol[j] += grid[i][j]
        }
        onesRow[i] = sum;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const onesR = onesRow[i]
            const zerosR = rows - onesRow[i];
            const onesC = onesCol[j]
            const zerosC = cols - onesCol[j]
            arr[i][j] = onesR + onesC - zerosR - zerosC
        }
    }

    return arr
};