/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    let output = 0;
    let startBinary = start.toString(2);
    let goalBinary = goal.toString(2);

    const len = startBinary.length > goalBinary.length ? startBinary.length : goalBinary.length

    startBinary = startBinary.padStart(len, "0")
    goalBinary = goalBinary.padStart(len, "0")

    for (let i = 0; i < startBinary.length; i++) {
        console.log(startBinary[i], goalBinary[i])
        if (startBinary[i] !== goalBinary[i]) output++;
    }

    return output
};