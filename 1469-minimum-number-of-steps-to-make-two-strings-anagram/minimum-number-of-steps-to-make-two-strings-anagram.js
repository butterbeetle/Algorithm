/** 00:15:49
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    let output = 0;
    const m1 = new Map();

    for (const i in s) {
        m1.set(s[i], (m1.get(s[i]) || 0) + 1)
        m1.set(t[i], (m1.get(t[i]) || 0) - 1)
    }

    for (const v of m1.values()) {
        output += Math.abs(v);
    }

    return output / 2
};