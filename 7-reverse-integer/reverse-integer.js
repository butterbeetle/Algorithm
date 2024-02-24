/** 00:07:21
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const bit = Math.pow(2, 31) - 1
    const n = parseInt(x.toString().split('').reverse().join(''))

    if (n > bit || n < -bit) return 0
    return x < 0 ? -n : n
}