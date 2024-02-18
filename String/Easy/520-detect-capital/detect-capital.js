/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    const upper = word.toUpperCase();
    const lower = word.toLowerCase();

    if (lower === word || upper === word) return true;
    if (word[0] + word.slice(1).toLowerCase() === word) return true;

    return false;
}