/** 00:02:57
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    const sArr = s.split("")

    for(let i=0; i<words.length; i++){
        if(words[i][0] !== sArr.shift()) return false
    }

    if(sArr.length) return false
    return true
};