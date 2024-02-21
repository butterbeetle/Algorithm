/** 00:04:32
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    return (start ^ goal).toString(2).split("0").join("").length
};