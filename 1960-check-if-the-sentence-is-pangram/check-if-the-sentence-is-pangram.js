/** 00:00:30
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    return new Set(sentence).size === 26 
};