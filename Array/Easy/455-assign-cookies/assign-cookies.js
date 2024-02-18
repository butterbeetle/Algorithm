/** 00:11:45
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    let output = 0;
    let j = 0;
    const child = g.sort((a, b) => a - b);
    const cookie = s.sort((a, b) => a - b);

    while (j < s.length) {
        if (cookie[j] >= child[output]) output++;
        j++
    }

    return output
};