/** 00:03:15
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
    const map = new Map();

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
        if (map.get(num) > 2) return false
    }

    return true
};