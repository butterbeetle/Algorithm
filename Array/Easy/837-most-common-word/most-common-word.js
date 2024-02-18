/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    const m = new Map();
    const arr = paragraph.replace(/[\p{P}$+<=>^`|~]/gu, " ")
        .toLowerCase()
        .split(/[, ]/g)
        .filter(Boolean);

    for (const str of arr) {
        if (!banned.includes(str)) m.set(str, (m.get(str) || 0) + 1)
    }

    return [...m].sort((a, b) => b[1] - a[1])[0][0]
};