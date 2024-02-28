/** 00:10:28
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function (words, groups) {
    const output = [];
    let prev = -1;

    for (const i in words) {
        if (prev !== groups[i]) {
            output.push(words[i])
            prev = groups[i]
        }
    }

    return output
};