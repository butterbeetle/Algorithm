/** 00:02:38
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let output = 0;
    const m = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (m.has(nums[i])) m.set(nums[i], false)
        else m.set(nums[i], true)
    }

    for (const [k, v] of m) {
        if (v) output += k
    }

    return output
};