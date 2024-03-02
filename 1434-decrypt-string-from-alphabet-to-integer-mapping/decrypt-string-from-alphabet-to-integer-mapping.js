/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
    const alphabet = '0abcdefghijklmnopqrstuvwxyz';
    let output = "";

    for (let i = 0; i < s.length;) {
        if (s[i + 2] === "#") {
            output += alphabet[parseInt(s[i] + s[i + 1])]
            i += 3;
        } else {
            output += alphabet[parseInt(s[i])]
            i++;
        }
    }

    return output
};