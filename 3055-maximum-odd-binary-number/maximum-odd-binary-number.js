/** 00:06:29
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
    let one = 0;
    let zero = 0;
    let output = "";

    for (const c of s) {
        if (c == 1) one++;
        else zero++;
    }

    one--;

    while (one + zero > 0) {
        if (one) {
            output = output + "1"
            one--
        }
        else {
            output = output + "0"
            zero--
        }
    }

    return output + "1"
};