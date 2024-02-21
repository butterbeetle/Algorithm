/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
    // const n = 7;
    // const e = n.toString(2)
    // console.log(e)
    // const z = e.padStart(32, '0')
    // console.log(z)
    // const p = parseInt(z, 2)
    // console.log(p)
    const l = left.toString(2).padStart(32, "0")
    const r = right.toString(2).padStart(32, "0")

    let i = 0;

    while (i < 32) {
        if (!(l[i] == r[i])) break;
        i++
    }

    let x = l.substring(0, i).padEnd(32, "0");
    return parseInt(x, 2)
};