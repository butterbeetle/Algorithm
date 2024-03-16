/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
    const alpha = "abcdefghijklnmopqrstuvwxyz";
    const m1 = new Map();
    const m2 = new Map();

    for (let i = 0; i < word1.length; i++) {
        m1.set(word1[i], (m1.get(word1[i]) || 0) + 1)
        m2.set(word2[i], (m2.get(word2[i]) || 0) + 1)
    }

    for (const c of alpha) {
        const v1 = m1.get(c) || 0
        const v2 = m2.get(c) || 0

        if (Math.abs(v1 - v2) > 3) return false
    }

    return true
};