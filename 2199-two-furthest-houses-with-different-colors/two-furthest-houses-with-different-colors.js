/** 00:04:13
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
    let s = 0;
    
    for (let i = colors.length - 1; i >= 0; i--) {
        if (colors[s] !== colors[i]) {
            const d1 = colors.lastIndexOf(colors[i])
            const d2 = Math.abs(colors.indexOf(colors[i]) - colors.lastIndexOf(colors[s]))
            return Math.max(d1, d2)
        }
    }

    return s
};