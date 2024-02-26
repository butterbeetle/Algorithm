/** 00:03:28
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    const map = new Map();
    const unique = [];

    for (const s of arr) {
        map.set(s, (map.get(s) || 0) + 1)
    }

    for (const [k, v] of map) {
        if (v === 1) unique.push(k)
    }

    return unique[k - 1] || ""
};