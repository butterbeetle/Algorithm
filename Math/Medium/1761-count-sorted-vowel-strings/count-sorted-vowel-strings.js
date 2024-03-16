/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
    let a = 1;
    let e = 1;
    let i = 1;
    let o = 1;
    let u = 1;

    while (n--) {
        a = a + e + i + o + u;
        e = e + i + o + u;
        i = i + o + u;
        o = o + u;
    }

    return a;
};