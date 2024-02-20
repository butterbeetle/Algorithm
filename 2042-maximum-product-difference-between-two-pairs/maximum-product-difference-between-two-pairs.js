/** 00:01:10
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
    const arr = nums.sort((a, b) => a - b);
    return (arr.pop() * arr.pop()) - (arr.shift() * arr.shift())
};