/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
    const str = x + "";
    let sum = 0;

    for (const s of str) {
        sum += +s;
    }

    if (!(x % sum)) return sum;
    else return -1;
};