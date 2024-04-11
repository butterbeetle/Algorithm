/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    const stack = [];
    const length = nums.length
    const output = new Array(length * 2).fill(-1);
    const numsnums = nums.concat(nums)

    for (let i = 0; i < (length * 2); i++) {
        while (stack.length && numsnums[i] > numsnums[stack[stack.length - 1]]) {
            const idx = stack.pop();
            output[idx] = numsnums[i];
        }
        stack.push(i);
    }

    return output.slice(0, length)
};