/** 00:06:57
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    let high = s.length;
    let low = 0;
    const arr = [];

    for (let i=0; i<=s.length; i++) {
        if (s[i] === "I") arr[i] = low++;
        else arr[i] = high--;
    }

    return arr
};