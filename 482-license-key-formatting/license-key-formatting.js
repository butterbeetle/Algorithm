/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    const output = [];
    const arr = s.split("-").join("");

    for (let i = arr.length; i >= 0; i -= k) {
        output.unshift(arr.substring(i - k, i))
    }

    return output.filter(Boolean).join("-").toUpperCase()
};