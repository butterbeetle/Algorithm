/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const ms = new Map();
    const mt = new Map();

    for (let i = 0; i < t.length; i++) {
        if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) return false
        // if (!ms.has(s[i])) ms.set(s[i], t[i])
        // else if (ms.get(s[i]) !== t[i]) return false;

        // if (!mt.has(t[i])) mt.set(t[i], s[i])
        // else if (mt.get(t[i]) !== s[i]) return false;
    }

    return true;
};