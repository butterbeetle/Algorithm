/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
    let output = "";
    const alpha = '0abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < s.length;) {
        if (s[i + 2] === "#") {
            output += alpha[parseInt(s[i] + s[i + 1])]
            i += 3;
        } else {
            output += alpha[parseInt(s[i])]
            i++;
        }
    }

    return output
};