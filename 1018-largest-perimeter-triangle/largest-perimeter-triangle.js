/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    //a+b>c
    let output = 0;
    nums.sort((a, b) => a - b);

    for (let i = 2; i <= nums.length - 1; i++) {
        if (nums[i] < nums[i - 1] + nums[i - 2]) {
            output = Math.max(output, nums[i] + nums[i - 1] + nums[i - 2])
        }
    }

    return output
};