/** 00:10:58
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
    const [curH, curM] = current.split(":")
    const [corH, corM] = correct.split(":")

    let output = 0;
    let diff = (corH * 60 + Number(corM)) - (curH * 60 + Number(curM))

    output += Math.floor(diff / 60)
    diff %= 60;

    output += Math.floor(diff / 15)
    diff %= 15;

    output += Math.floor(diff / 5)
    diff %= 5;

    return output + diff
};

53