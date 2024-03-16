/** 01:27:00
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
    const output = [[rStart, cStart]];
    const size = rows * cols;

    const matrix = Array.from({ length: rows }, () => new Array(cols).fill(0))
    matrix[rStart][cStart] = 1;

    let limit = 1;
    let inc = 1;

    const isGrid = (rows, cols, rStart, cStart) => {
        if (cStart >= 0 && cStart < cols && rStart >= 0 && rStart < rows) {
            output.push([rStart, cStart]);
        }
    }

    while (output.length < size) {
        let x = limit;
        while (x--) {
            cStart += inc;
            isGrid(rows, cols, rStart, cStart)
        }
        x = limit;
        while (x--) {
            rStart += inc;
            isGrid(rows, cols, rStart, cStart)
        }
        inc *= -1;
        limit++;
    }

    return output
};