/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    const set = new Set();
    const output = [];

    for (const num of nums) {
        if (set.has(num)) output.push(num);
        set.add(num);
    }

    return output
};