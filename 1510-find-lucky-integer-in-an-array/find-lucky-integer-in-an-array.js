/** 00:01:38
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let output = -1;
    const map = new Map();

    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    for (const [k, v] of map) {
        if (k === v && output < k) output = k
    }

    return output
};