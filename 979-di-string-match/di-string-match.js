/** 00:06:57
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    let high = s.length;
    let low = 0;
    const arr = [];

    for (const oper of s) {
        if (oper === "I") arr.push(low++);
        else arr.push(high--);
    }

    arr.push(low)

    return arr
};