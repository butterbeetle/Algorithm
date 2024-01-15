/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const arr = [];
    let i=0;
    while(i<word1.length){
        arr.push(word1[i],word2[i++])
    }
    while(i<word2.length){
        arr.push(word2[i++])
    }
    return arr.join("")
};