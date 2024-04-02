/** 00:52:55
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const tmp = nums.splice(nums.length - (k % nums.length)).reverse()
    nums.reverse().push(...tmp)
    nums.reverse()

    // TLE
    // while (k) {
    //     for (let i = nums.length - 1; i > 0; i--) {
    //         [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
    //     }
    //     k--
    // }
};