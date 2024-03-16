/** 00:00:56
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    const set = new Set(nums);
    set.delete(0)
    return set.size
};