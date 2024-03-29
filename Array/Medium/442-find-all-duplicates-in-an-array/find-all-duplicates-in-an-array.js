/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let output = [];

    for (let i = 0; i < nums.length; i++) {
        let position = Math.abs(nums[i]) - 1;
        if (nums[position] < 0) output.push(Math.abs(nums[i]));
        nums[position] *= -1;
    }

    return output;
};

// var findDuplicates = function (nums) {
//     const set = new Set();
//     const output = [];

//     for (const num of nums) {
//         if (set.has(num)) output.push(num);
//         set.add(num);
//     }

//     return output
// };