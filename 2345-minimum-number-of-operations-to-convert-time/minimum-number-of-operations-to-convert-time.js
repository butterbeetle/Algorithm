/** 00:07:58
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
    const [curH, curM] = current.split(":")
    const [corH, corM] = correct.split(":")

    let output = 0;
    let diff = (corH * 60 + Number(corM)) - (curH * 60 + Number(curM))

    while (diff) {
        console.log(diff, output)
        output++;
        if (diff >= 60) diff -= 60;
        else if (diff >= 15) diff -= 15;
        else if (diff >= 5) diff -= 5;
        else diff -= 1;
    }

    return output
};

53