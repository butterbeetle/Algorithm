/** 00:04:13
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
    for (let i = colors.length - 1; i >= 0; i--) {
        if (colors[0] !== colors[i]) {
            const d = Math.abs(colors.indexOf(colors[i]) - colors.lastIndexOf(colors[0]))
            return Math.max(i, d)
        }
    }
};