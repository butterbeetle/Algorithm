/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, str) {
    let output = "";
    const map = new Map();

    for (const s of str) {
        map.set(s, (map.get(s) || 0) + 1)
    }

    for (const o of order) {
        if (!map.has(o)) continue;

        for (let i = 0; i < map.get(o); i++) {
            output += o
        }
        map.delete(o)
    }

    for (const [k, v] of map) {
        for (let i = 0; i < v; i++) {
            output += k
        }
    }

    return output
};