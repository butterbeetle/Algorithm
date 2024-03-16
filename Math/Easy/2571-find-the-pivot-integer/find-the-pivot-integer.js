/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    let prefix = 0;
    let total = n * (n + 1) / 2;

    for (let i = 1; i <= n; i++) {
        if (prefix === (total - prefix - i)) return i
        prefix += i
    }

    return -1;
};