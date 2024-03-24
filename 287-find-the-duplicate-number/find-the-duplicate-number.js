/** 00:01:52
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    const arr = new Array(nums.length).fill(false);

    for (let i = 0; i < nums.length; i++) {
        if (arr[nums[i]]) return nums[i]
        arr[nums[i]] = true;
    }
};