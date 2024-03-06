/** 00:36:51
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
    const m = mat[0].length;
    const n = mat.length;

    const jobs = (i, j) => {
        const arr = [];
        let row = i;
        let col = j;

        while (mat[row] && mat[row][col]) {
            arr.push(mat[row][col]);
            row++;
            col++;
        }

        arr.sort((a, b) => a - b)

        while (arr.length) {
            --row;
            --col;
            mat[row][col] = arr.pop()
        }
    }

    for (let col = 0; col < m; col++) {
        jobs(0, col);
    }
    for (let row = 0; row < n; row++) {
        jobs(row, 0);
    }

    return mat
}