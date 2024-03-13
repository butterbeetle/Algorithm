/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    let prefix = 0;
    let sum = Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cur) => acc + cur, 0)

    for (let i = 1; i <= n; i++) {
        prefix += i
        if (prefix === (sum - prefix + i)) return i
    }

    return -1;
};