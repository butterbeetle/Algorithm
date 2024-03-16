/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
    const arr = s.split("|");
    let output = 0;

    for (let i = 0; i < arr.length; i += 2) {
        for (const word of arr[i]) {
            if (word === "*") output++;
        }
    }

    return output
};