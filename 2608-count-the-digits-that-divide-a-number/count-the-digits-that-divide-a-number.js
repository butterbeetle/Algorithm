/** 00:00:47
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    let output = 0;

    for (const n of num.toString().split("")) {
        if (!(num % n)) output++;
    }

    return output;
};