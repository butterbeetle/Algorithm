/** 00:01:18
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function (s1, s2) {
    if (s1 === s2) return true;
    let arr = s1.split("");

    [arr[1], arr[3]] = [arr[3], arr[1]];
    if (arr.join("") == s2) return true;

    [arr[0], arr[2]] = [arr[2], arr[0]];
    if (arr.join("") === s2) return true;

    [arr[1], arr[3]] = [arr[3], arr[1]];
    if (arr.join("") === s2) return true;

    return false
};