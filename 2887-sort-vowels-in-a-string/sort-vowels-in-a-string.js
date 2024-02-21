/** 00:07:38
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    const vowelStack = []
    const indexStack = []

    for (let i = 0; i < s.length; i++) {
        if (!vowels.includes(s[i])) continue;
        vowelStack.push(s[i])
        indexStack.push(i)
    }

    vowelStack.sort()

    const output = s.split("")

    for (let i = 0; i < indexStack.length; i++) {
        output[indexStack[i]] = vowelStack[i]
    }

    return output.join("")
};