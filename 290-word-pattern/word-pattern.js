/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const map = new Map();
    const map2 = new Map();
    const arr = s.split(" ");

    if (arr.length !== pattern.length) return false

    for (let i = 0; i < arr.length; i++) {
        if (!map.has(pattern[i])) map.set(pattern[i], arr[i])
        else if (map.get(pattern[i]) !== arr[i]) return false;

        if (!map2.has(arr[i])) map2.set(arr[i], pattern[i])
        else if (map2.get(arr[i]) !== pattern[i]) return false;
    }

    return true;
};