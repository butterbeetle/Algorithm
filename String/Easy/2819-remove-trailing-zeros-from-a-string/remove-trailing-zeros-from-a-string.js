/** 00:01:46
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
    let idx = 0;

    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] != 0) return num.substring(0, i + 1)
    }

    return num
};