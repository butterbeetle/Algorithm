/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    // return !(Math.sqrt(num) % 1)
    let i = 1;
    while (i * i < num) i++;
    return i * i === num
};