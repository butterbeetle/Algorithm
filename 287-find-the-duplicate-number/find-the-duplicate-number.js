/** 00:01:52
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    for (const num of nums) {
        const index = Math.abs(num);
        nums[index] *= -1;
        if (nums[index] >= 0) {
            return Math.abs(num);
        }
    }
    // const arr = new Array(nums.length).fill(false);

    // for (let i = 0; i < nums.length; i++) {
    //     if (arr[nums[i]]) return nums[i]
    //     arr[nums[i]] = true;
    // }
};