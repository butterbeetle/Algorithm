/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    const m = new Map();

    for (const v of s) {
        if (m.get(v)) return v
        m.set(v, true);
    }
};