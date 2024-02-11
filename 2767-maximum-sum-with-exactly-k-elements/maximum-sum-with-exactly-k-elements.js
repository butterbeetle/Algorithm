/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
    let output = 0;
    const max = Math.max(...nums);

    for (let i = 0; i < k; i++) {
        output += (max + i)
    }

    return output
};