/** 00:45:04
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
    const output = [];
    const maxDis = Math.max(rCenter, rows - 1 - rCenter) + Math.max(cCenter, cols - 1 - cCenter);
    const tmp = [];
    // const grid = Array.from({ length: rows }, () => new Array(cols).fill(false));

    for (let i = 0; i <= maxDis; i++) {
        tmp.push([])
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const dis = Math.abs(rCenter - row) + Math.abs(cCenter - col)
            tmp[dis].push([row, col])
        }
    }

    // const jobs = (row, col) => {
    //     if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col]) return;
    //     const dis = Math.abs(rCenter - row) + Math.abs(cCenter - col)

    //     grid[row][col] = true;
    //     tmp[dis].push([row, col])

    //     jobs(row - 1, col)
    //     jobs(row + 1, col)
    //     jobs(row, col - 1)
    //     jobs(row, col + 1)
    // }

    // jobs(rCenter, cCenter)

    for (let i = 0; i <= maxDis; i++) {
        output.push(...tmp[i])
    }

    return output
};