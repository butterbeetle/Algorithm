/** 00:02:03
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    const m = new Map();
    let count = 0;
    let len = nums.length;

    for (let i = 0; i < nums.length; i++) {
        if (m.get(nums[i])) {
            m.delete(nums[i])
            len -= 2;
            count++;
        } else m.set(nums[i], true)
    }

    return [count, len]
};