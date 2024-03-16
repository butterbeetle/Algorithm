/** 00:02:15
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    const less = [];
    const pivots = [];
    const greater = [];

    for (const num of nums) {
        if (num < pivot) less.push(num)
        else if (pivot < num) greater.push(num)
        else pivots.push(num)
    }

    return less.concat(pivots, greater)
};