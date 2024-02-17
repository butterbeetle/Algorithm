/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    const i = word.indexOf(ch)

    if (i < 0) return word;

    return [...word.substring(0, i + 1)].reverse().join("") + word.substring(i + 1)
};