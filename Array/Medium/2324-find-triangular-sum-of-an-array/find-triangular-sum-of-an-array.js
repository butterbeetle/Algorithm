/** 00:04:16
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
    while (nums.length !== 1) {
        let arr = [];
        for (let i = 1; i < nums.length; i++) {
            arr.push((nums[i - 1] + nums[i]) % 10)
        }
        nums = arr;
    }

    return nums[0]
};