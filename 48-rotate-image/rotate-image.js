/** 00:25:47
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (mat) {
    const n = mat.length;

    // Transpose
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]]
        }
    }

    // Reverse
    for (let i = 0; i < n; i++) {
        mat[i].reverse();
        // for (let j = 0, k = n - 1; j < n / 2; j++, k--) {
        //     [mat[i][j], mat[i][k]] = [mat[i][k], mat[i][j]]
        // }
    }
};