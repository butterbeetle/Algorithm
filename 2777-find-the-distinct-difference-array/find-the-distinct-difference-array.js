/** 00:03:33
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
    const output = [];
    for (let i = 0; i < nums.length; i++) {
        const set = new Set();
        for (let j = 0; j <= i; j++) {
            set.add(nums[j])
        }
        const prefix = set.size;
        set.clear();
        for (let j = i + 1; j < nums.length; j++) {
            set.add(nums[j])
        }
        const suffix = set.size;
        output.push(prefix - suffix)
    }
    return output
};