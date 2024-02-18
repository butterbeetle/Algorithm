/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
    let output = 0;
    for (let i = 0; i <= nums.length - 3; i++) {
        if (nums.includes(nums[i] + diff) && nums.includes(nums[i] + diff + diff)) output++;
    }

    return output
};