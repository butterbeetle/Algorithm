/** 00:36:51
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
    const jobs = (row, col) => {
        const arr = [];

        while (mat[row] && mat[row][col]) arr.push(mat[row++][col++]);

        arr.sort((a, b) => a - b)

        while (arr.length) mat[--row][--col] = arr.pop()
    }

    for (let col = 0; col < mat[0].length; col++) {
        jobs(0, col);
    }
    for (let row = 0; row < mat.length; row++) {
        jobs(row, 0);
    }

    return mat
}