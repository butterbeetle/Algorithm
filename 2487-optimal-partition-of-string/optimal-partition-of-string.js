/** 00:09:55
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
    let output = 0;
    const set = new Set();

    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            set.clear();
            output++
        }
        set.add(s[i])
    }

    return output + 1;
};