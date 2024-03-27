/** 00:12:06
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let output = 0;

    for (let i = 0; i < nums.length; i++) {
        let multiply = 1;
        for (let j = i; j < nums.length; j++) {
            multiply *= nums[j]
            if (multiply < k) output++;
            else break;
        }
    }

    return output
};