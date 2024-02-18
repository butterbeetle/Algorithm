/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n < 1 || n % 1) return false
    if (n === 1) return true
    return isPowerOfThree(n / 3)
};