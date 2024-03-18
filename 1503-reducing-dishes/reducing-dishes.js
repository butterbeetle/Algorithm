/** 00:18:56
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
    let output = 0;
    satisfaction.sort((a, b) => a - b)

    for (let i = 0; i < satisfaction.length; i++) {
        let magnification = 1;
        let value = 0;

        for (let j = satisfaction.length - i - 1; j < satisfaction.length; j++) {
            value += (satisfaction[j] * magnification++)
        }

        if (output < value) output = value
    }

    return output
};