/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    const output = [];
    const str = s.replace(/-/g, '').toUpperCase();

    for (let i = str.length; i >= 0; i -= k) {
        output.unshift(str.substring(i - k, i))
    }

    return output.filter(Boolean).join("-")
};