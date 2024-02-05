/** 00:03:47
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
    const m1 = new Map();
    if (words.length === 1) return true

    for (const word of words) {
        for (const c of word) {
            m1.set(c, (m1.get(c) || 0) + 1)
        }
    }

    for (const v of m1.values()) {
        if ((v%words.length)) return false;
    }

    return true
};