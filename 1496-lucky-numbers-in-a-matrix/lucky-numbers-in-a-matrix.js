/** 00:16:09
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    const output = [];

    const rows = matrix.length;
    const rowArr = [];

    const cols = matrix[0].length;
    const colArr = []

    for (let row = 0; row < rows; row++) {
        let colMin = matrix[row][0];
        for (let col = 0; col < cols; col++) {
            colMin = Math.min(matrix[row][col], colMin)
        }
        colArr.push(colMin)
    }

    for (let col = 0; col < cols; col++) {
        let rowMax = 0;
        for (let row = 0; row < rows; row++) {
            rowMax = Math.max(matrix[row][col], rowMax)
        }
        rowArr.push(rowMax)
    }

    const max = Math.max(...colArr)
    const flag = rowArr.includes(max)

    if (flag) output.push(max)

    return output
};