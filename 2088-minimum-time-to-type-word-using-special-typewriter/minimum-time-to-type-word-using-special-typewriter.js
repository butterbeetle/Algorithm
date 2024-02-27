/**
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
        let x = map.get(w) - map.get(point);
        x = x < 0 ? x + 26 : x
        let y = map.get(point) - map.get(w)
        y = y < 0 ? y + 26 : y

        if (point !== w) output += Math.min(x, y)
        output += 1;
        point = w;
    }

    return output
};