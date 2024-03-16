/** 00:04:02
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
    const output = [];
    const p = Array.from({ length: m }, (_, i) => i + 1)

    for (let i = 0; i < queries.length; i++) {
        const idx = p.indexOf(queries[i]);
        output.push(idx);
        p.unshift(...p.splice(idx, 1))
    }

    return output
};