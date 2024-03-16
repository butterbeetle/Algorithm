/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let x = -1;
    let y = nums.length;

    for (let i = 0; i < nums.length && i < y; i++) {
        console.log(nums, x, y)
        if (nums[i] == 0) {
            x++;
            [nums[x], nums[i]] = [nums[i], nums[x]]
        } else if (nums[i] == 2) {
            y--;
            [nums[y], nums[i]] = [nums[i], nums[y]]
            i--;
        }
    }

    return nums
};