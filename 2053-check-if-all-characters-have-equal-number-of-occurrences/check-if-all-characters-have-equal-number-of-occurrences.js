/** 00:01:46
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    const m = new Map();

    for (const c of s) {
        m.set(c, (m.get(c) || 0) + 1)
    }

    let occurrences = 0;

    for (const v of m.values()) {
        if (!occurrences) occurrences = v;
        else if (occurrences !== v) return false
    }

    return true
};