/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
    let output = 0;
    const m = new Map();

    for (let i = 0; i < rings.length; i += 2) {
        const color = rings[i];
        const where = rings[i + 1];
        m.set(where, (m.get(where) ?? "") + color)
    }

    for (const v of m.values()) {
        const r = v.includes("R");
        const g = v.includes("G");
        const b = v.includes("B");
        if (r && g && b) output++;
    }

    return output;
};