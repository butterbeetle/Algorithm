/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let output = 0;
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        nums[i] += (nums[i - 1] || 0)

        if (nums[i] === k) output++;
        if (map.has(nums[i] - k)) output += map.get(nums[i] - k)

        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }

    // console.log(nums)
    // console.log(map)
    // console.log(output)

    return output
};