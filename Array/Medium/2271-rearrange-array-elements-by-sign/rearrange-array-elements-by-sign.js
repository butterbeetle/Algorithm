/** 00:03:47
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let output = [];
    const positive = [];
    const negative = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) positive.push(nums[i]);
        else negative.push(nums[i]);
    }

    for (let i = 0; i < nums.length / 2; i++) {
        output.push(positive[i], negative[i])
    }

    return output
};