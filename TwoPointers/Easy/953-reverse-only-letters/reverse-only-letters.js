/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const alpha = [];
    const special = [];
    let str = ""

    for (let i = 0; i < s.length; i++) {
        if (alphabet.includes(s[i])) alpha.push(s[i])
        else special.push(s[i])
    }

    for (let i = 0; i < s.length; i++) {
        if (alphabet.includes(s[i])) str += alpha.pop()
        else str += special.shift()
    }

    return str
};