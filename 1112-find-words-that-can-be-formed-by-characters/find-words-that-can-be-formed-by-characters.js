/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    const output = new Array(words.length).fill(true);
    const map = new Map();

    for (const char of chars) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (const i in words) {
        const m = new Map(map);
        for (const w of words[i]) {
            m.set(w, (m.get(w) || 0) - 1);
            if (m.get(w) < 0) output[i] = false
        }
    }

    return output.reduce((acc, cur, i) => {
        if (cur) acc += words[i].length;
        return acc
    }, 0)
};