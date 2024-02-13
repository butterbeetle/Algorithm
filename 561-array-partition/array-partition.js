/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    let output = 0;
    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i += 2) {
        output += nums[i]
    }

    return output
};