/** 00:04:32
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
    nums.sort((a, b) => b - a);
    let i = 1;
    let arr = [];

    while (1) {
        arr = nums.slice(0, i);
        const sum1 = arr.reduce((acc, cur) => acc + cur, 0);
        const sum2 = nums.slice(i++).reduce((acc, cur) => acc + cur, 0);
        if (sum1 > sum2) break;
    }

    return arr;
};