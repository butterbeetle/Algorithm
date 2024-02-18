/** 00:07:53
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    let output = 0;
    const m1 = new Map();
    const m2 = new Map();

    for (let i = 0; i < words1.length; i++) {
        m1.set(words1[i], (m1.get(words1[i]) || 0) + 1);
    }

    for (let i = 0; i < words2.length; i++) {
        if (m1.has(words2[i])) m2.set(words2[i], (m2.get(words2[i]) || 0) + 1);
    }

    for (const [k, v] of m2) {
        if (v === 1 && m1.get(k) === 1) output++;
    }

    return output
};