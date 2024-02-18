/** 00:03:21
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
    let output = 0;

    for (const i in nums) {
        if (!(nums.length % (+i+1))) output += nums[i] ** 2
    }

    return output
};