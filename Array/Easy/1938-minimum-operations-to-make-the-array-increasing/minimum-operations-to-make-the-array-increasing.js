/** 00:03:24
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let output = 0;
    let prev = nums[0]

    for (let i = 1; i < nums.length; i++) {
        const value = (prev - nums[i]) + 1
        if (nums[i] <= prev) {
            output += value
            prev = nums[i] + value
        }
        else prev = nums[i];
    }

    return output
};