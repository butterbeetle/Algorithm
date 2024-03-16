/** 00:10:22
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    const m = new Map();

    for (const [departure, arrival] of paths) {
        m.set(departure, arrival)
    }

    let start = paths[0][0];

    while (m.get(start)) {
        start = m.get(start)
    }

    return start
};