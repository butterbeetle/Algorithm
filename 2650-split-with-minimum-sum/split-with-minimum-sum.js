/** 00:02:43
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
    num = num.toString().split("").sort((a, b) => a - b)
    let s1 = "";
    let s2 = "";

    for (const i in num) {
        if (!(i % 2)) s1 += num[i]
        else s2 += num[i]
    }

    return Number(s1) + Number(s2)
};