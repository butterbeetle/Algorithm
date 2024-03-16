/** 00:06:51
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    let len = word.length;
    let magnification = 1;
    let output = 0;

    while (len >= 8) {
        len -= 8;
        output += (8 * magnification)
        magnification++;
    }

    return output + (len * magnification)
};