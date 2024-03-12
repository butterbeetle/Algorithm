/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        const set = new Set()
        for (let col = 0; col < n; col++) {
            const num = matrix[i][col];
            if (!set.has(num)) set.add(num)
            else return false;
        }
        set.clear();
        for (let row = 0; row < n; row++) {
            const num = matrix[row][i];
            if (!set.has(num)) set.add(num)
            else return false;
        }
    }

    return true
};