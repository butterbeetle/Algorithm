/** 00:01:46
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    const m = new Map();

    for (const c of s) {
        m.set(c, (m.get(c) || 0) + 1)
    }

    return new Set([...m.values()]).size === 1
};