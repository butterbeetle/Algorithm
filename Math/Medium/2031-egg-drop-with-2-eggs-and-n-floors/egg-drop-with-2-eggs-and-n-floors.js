/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function (n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
        if (sum >= n) return i
    }
};