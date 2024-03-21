/** 00:31:30
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
    const rowLength = rowSum.length;
    const colLength = colSum.length;

    const arr = Array.from({ length: rowLength }, () => new Array(colLength).fill(0))

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            const value = Math.min(rowSum[i], colSum[j])
            rowSum[i] -= value;
            colSum[j] -= value;
            arr[i][j] = value;
        }
    }

    return arr
};

// 5 0 0
// 3 4 0
// 0 2 8