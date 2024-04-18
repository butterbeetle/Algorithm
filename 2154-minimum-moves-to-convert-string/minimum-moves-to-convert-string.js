/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
    // OXOX FAIL
    // return s.split("O").filter(v => v).length;

    let output = 0;

    for (let i = 0; i < s.length;) {
        if (s[i] === "X") {
            output++;
            i += 3;
        } else i++;
    }

    return output
};