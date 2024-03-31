/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let prev = 0;
    let max = 0;

    for (const g of gain) {
        prev += g;
        max = Math.max(prev, max)
    }

    return max
};