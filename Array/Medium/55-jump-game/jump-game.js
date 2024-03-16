/** 00:28:58
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let goal = nums.length - 1;

    for (let i = goal; i >= 0; i--) {
        if (nums[i] + i >= goal) goal = i;
    }

    return goal ? false : true
};