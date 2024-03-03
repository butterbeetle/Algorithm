/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
    const set = new Set();

    for (const [s, e] of nums) {
        for (let i = s; i <= e; i++) {
            set.add(i)
        }
    }

    return set.size
};