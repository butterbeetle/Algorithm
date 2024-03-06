/** 00:08:49
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    nums.sort((a, b) => a - b)
    const len = nums.length / 2
    let output = 0;
    for (let i = 0; i < len; i++) {
        output = Math.max(output, nums.shift() + nums.pop())
    }

    return output
};