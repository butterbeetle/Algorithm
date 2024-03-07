/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
    let output = 0;

    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            const c = Math.sqrt(a * a + b * b);
            if (Number.isInteger(c) && c <= n) output++;
        }
    }

    return output
};