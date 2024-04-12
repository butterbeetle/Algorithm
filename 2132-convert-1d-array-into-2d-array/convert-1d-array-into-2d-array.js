/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    if((m*n) !== original.length) return [];

    const output = Array.from({ length: m }, () => new Array(n).fill(0))

    for (let i = 0; i < original.length; i++) {
        const row = Math.floor(i / n);
        const col = (i % n);
        output[row][col] = original[i];
    }

    return output
};