/** 00:07:29
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
    let one = -1;
    let zero = 0;

    for (const c of s) {
        if (c == 1) one++;
        else zero++;
    }

    return "1".repeat(one) + "0".repeat(zero) + "1"
};