/** 00:14:15
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
    const base = Math.max(...nums)

    if (nums.length <= base) return false

    const map = new Map();
    const sorted = nums.sort((a, b) => a - b);
    let i = 0;

    while (i < nums.length - 1) {
        if (sorted[i] !== (i + 1)) return false
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        i++;
    }

    map.set(nums[i], (map.get(nums[i]) || 0) + 1)

    return map.get(base) === 2
};