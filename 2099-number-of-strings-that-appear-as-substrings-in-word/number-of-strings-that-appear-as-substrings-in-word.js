/** 00:00:55
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
    let output = 0;

    for (let i = 0; i < patterns.length; i++) {
        if (word.indexOf(patterns[i]) >= 0) output++;
    }

    return output;
};