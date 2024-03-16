/** 00:09:04
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    let output = 0;
    boxTypes.sort((a, b) => b[1] - a[1]);

    for (const [num, units] of boxTypes) {
        if (truckSize >= num) {
            truckSize -= num
            output += (num * units);
        } else {
            output += (truckSize * units)
            break;
        }
    }

    return output
};