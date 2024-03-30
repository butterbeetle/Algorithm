/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    return nums.filter(n => n < k).length
};