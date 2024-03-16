/** 00:28:51
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function (words) {
    const set = new Set();

    for (const word of words) {
        const odd = [];
        const even = [];

        for (const i in word) {
            if (!(i % 2)) even.push(word[i])
            else odd.push(word[i])
        }

        const str = odd.sort().join("") + even.sort().join("");
        set.add(str)
    }

    return set.size
};