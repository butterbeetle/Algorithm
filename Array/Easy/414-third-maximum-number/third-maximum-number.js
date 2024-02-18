/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    const n = nums.length
    if (n === 1) return nums[0]
    if (n === 2) return Math.max(nums[0], nums[1])

    const arr = Array.from(new Set(nums)).sort((a, b) => b - a)

    return arr[2] ?? arr[0]
};