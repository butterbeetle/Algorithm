/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num > 9) {
        let str = 0

        for (const n of num.toString()) {
            str += +n
        }

        num = str
    }

    return num
};