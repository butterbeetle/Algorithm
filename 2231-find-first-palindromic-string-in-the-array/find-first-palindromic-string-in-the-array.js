/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    for (const word of words) {
        if (word === [...word].reverse().join("")) return word
    }

    return ""
};