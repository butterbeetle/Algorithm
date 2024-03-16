/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    const output = [];

    for (const word of words) {
        output.push(word)
        for (let i = 0; i < pattern.length; i++) {
            const wIndex = word.indexOf(word[i], i + 1)
            const pIndex = pattern.indexOf(pattern[i], i + 1)
            if (wIndex !== pIndex) {
                output.pop()
                break;
            }
        }
    }

    return output
};