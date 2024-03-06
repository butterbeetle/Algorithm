/** 00:08:49
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    nums.sort((a, b) => a - b)

    let output = 0;
    let l = 0;
    let r = nums.length - 1;

    while (l < r) output = Math.max(output, nums[l++] + nums[r--])

    return output
};