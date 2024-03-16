/** 00:15:49
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    const output = []
    let len = 0;

    for (let i = 1; i <= n; i++) {
        if (target.includes(i)) {
            output.push("Push")
            len++
        }
        else output.push("Push", "Pop")

        if (len === target.length) break;
    }

    return output
};