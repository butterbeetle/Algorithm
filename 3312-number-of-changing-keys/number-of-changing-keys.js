/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
    let output = 0;
    const str = s.toLowerCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[i - 1]) output++;
    }

    return output;
};