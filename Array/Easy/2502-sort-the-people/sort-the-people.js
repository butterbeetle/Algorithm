/** 00:01:50
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    const m = [];

    for (let i = 0; i < names.length; i++) {
        m.push([names[i], heights[i]]);
    }

    return [...m].sort((a, b) => b[1] - a[1]).map(v => v[0])
};