/** 00:03:24
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
    const m = new Map()

    for (let i = 0; i < nums.length; i++) {
        const target = nums[i + 1];
        if (nums[i] === key) {
            m.set(target, (m.get(target) || 0) + 1)
        }
    }

    return [...m].sort((a, b) => b[1] - a[1])[0][0]
};