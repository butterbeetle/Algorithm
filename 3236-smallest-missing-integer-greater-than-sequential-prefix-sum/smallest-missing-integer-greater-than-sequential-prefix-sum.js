/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
    let output = 0;

    for (let i = 0; i < nums.length; i++) {
        output += nums[i]
        if (nums[i] + 1 !== nums[i + 1]) break;
    }

    if (!nums.includes(output)) return output;

    while (nums.includes(output)) {
        output++;
    }

    return output
};