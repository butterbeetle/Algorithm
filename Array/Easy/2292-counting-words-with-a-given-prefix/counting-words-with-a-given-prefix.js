/** 00:00:29
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    let output = 0;

    for (const word of words) {
        if (word.startsWith(pref)) output++;
    }

    return output;
};