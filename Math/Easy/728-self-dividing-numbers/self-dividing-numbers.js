/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let output = [];

    for (let i = left; i <= right; i++) {
        let isDividingNumber = true

        for (const digit of i + "") {
            if (!digit || (i % digit) != 0) isDividingNumber = false
        }

        if (isDividingNumber) output.push(i)

    }

    return output
};