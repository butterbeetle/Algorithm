/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    let count = 0;
    const rows = mat.length;

    for (let row = 0; row < rows; row++) {
        let sum = 0;
        const idx = mat[row].indexOf(1);
        const lidx = mat[row].lastIndexOf(1);
        const isOnly = idx === lidx;

        if (!isOnly) continue;

        for (let r = 0; r < rows; r++) {
            sum += mat[r][idx]
        }

        if (sum === 1) count++;

    }

    return count;
};
// 0 0 1 0 | 1
// 0 0 0 0 | 0
// 0 0 0 0 | 0
// 0 1 0 0 | 1
// ---------
// 0 1 1 0 