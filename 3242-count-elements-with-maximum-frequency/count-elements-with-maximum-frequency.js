/** 00:02:18
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    let max = 0;
    let output = 0;
    const map = new Map();

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
        max = max < map.get(num) ? map.get(num) : max;
    }

    for (const v of map.values()) {
        if (v === max) output += v;
    }

    return output
};