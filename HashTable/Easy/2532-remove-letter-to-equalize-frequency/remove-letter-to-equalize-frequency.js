/** 00:19:42
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
    const map = new Map();

    for (const w of word) {
        map.set(w, (map.get(w) || 0) + 1)
    }

    for (const [k, v] of map) {
        const m1 = new Map(map)
        m1.set(k, (m1.get(k) - 1))
        if (m1.get(k) === 0) m1.delete(k)
        if (new Set(m1.values()).size === 1) return true
    }

    return false
};