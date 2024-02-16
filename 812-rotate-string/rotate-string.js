/** 00:03:21
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    const arr = [...s];

    for (let i = 0; i < s.length; i++) {
        arr.push(arr.shift())
        const str = arr.join("")
        if (str === goal) return true;
    }

    return false
};