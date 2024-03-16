/** 00:02:18
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    let output = 0;

    for (let i = 0; i < s.length - 2; i++) {
        if (new Set(s.substring(i, i + 3)).size === 3) output++;
    }

    return output
};