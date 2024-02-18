/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    let k = 2;
    const arr = [1, 2, 3, 5]
    const sqrtNum = Math.sqrt(n)

    while (k <= sqrtNum && n != 1) {
        if (!(n % k)) {
            if (!arr.includes(k)) return false
            n /= k
        }
        else k++;
    }

    if (!arr.includes(n)) return false
    return true
};