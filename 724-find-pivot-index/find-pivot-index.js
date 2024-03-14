/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let left = 0;
    let right = nums.reduce((acc, cur) => acc + cur, 0);

    let i = 0;

    while (i < nums.length) {
        left += nums[i - 1] || 0;
        right -= nums[i];
        if (left === right) return i
        i++;
    }

    return -1;
};
// 0 28

//  0 0 27
//  1 1 20
//  8 2 17
// 11 3 11
// 17 4  6
// 22 5  0