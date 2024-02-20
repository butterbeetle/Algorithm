/** 00:04:16
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
    const set = new Set();

    for (let n of nums) {
        set.add(n)
        set.add((+[...n + ""].reverse().join("")))
    }

    return set.size
};