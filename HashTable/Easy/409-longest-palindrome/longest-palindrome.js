/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let output = 0;
    const map = new Map();

    for (let c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }

    for (const [k, v] of map) {
        if (!(v % 2)) {
            output += v;
            map.delete(k)
        }
        else {
            output += v - 1
            map.set(k, 1)
        }
    }

    return map.size ? output + 1 : output
};