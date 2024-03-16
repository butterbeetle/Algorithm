/** 00:15:57
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
    let output = 0;
    let point = "a";

    const map = "abcdefghijklmnopqrstuvwxyz".split("").reduce((acc, cur, i) => {
        acc.set(cur, i + 1);
        return acc
    }, new Map());

    for (const w of word) {
        const dist = Math.abs(map.get(point) - map.get(w))
        output += Math.min(dist, 26 - dist) + 1
        point = w;
    }

    return output
};