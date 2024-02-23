/** 00:03:24
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const output = [];

    for (let i = 0; i <= n; i++) {
        const l = i.toString(2).split("").filter(v => v == 1).length;
        output.push(l)
    }

    return output
};