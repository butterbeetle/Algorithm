/** 00:04:44
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
    let output = 0;
    const m = new Map();

    for (let i = lowLimit; i <= highLimit; i++) {
        const n = i.toString().split("").reduce((acc, cur) => acc + +cur, 0);
        m.set(n, (m.get(n) || 0) + 1);
        output = output < m.get(n) ? m.get(n) : output
    }

    return output
};