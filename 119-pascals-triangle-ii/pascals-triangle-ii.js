/** 00:05:07
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const arr = Array.from({ length: rowIndex + 1 }, () => [])

    for (let i = 0; i < rowIndex + 1; i++) {
        for (let j = 0; j <= i; j++) {
            if (!j || j === i) arr[i][j] = 1;
            else arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
        }
    }

    return arr[rowIndex]
};