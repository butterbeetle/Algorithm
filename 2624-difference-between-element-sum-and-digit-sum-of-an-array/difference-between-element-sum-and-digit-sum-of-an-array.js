/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let s1 = 0;
    let s2 = 0;

    for (const n of nums) {
        s1 += n;
        s2 += (n + "").split("").reduce((acc, cur) => acc + (+cur), 0)
    }

    return Math.abs(s1 - s2)
};