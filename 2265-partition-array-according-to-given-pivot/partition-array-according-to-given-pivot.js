/** 00:02:15
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    const output = [];
    const less = [];
    const pivots = [];
    const greater = [];

    for (const num of nums) {
        if (num < pivot) less.push(num)
        else if (pivot < num) greater.push(num)
        else pivots.push(num)
    }

    for (const num of less) {
        output.push(num)
    }

    for (const num of pivots) {
        output.push(num)
    }

    for (const num of greater) {
        output.push(num)
    }

    return output
};