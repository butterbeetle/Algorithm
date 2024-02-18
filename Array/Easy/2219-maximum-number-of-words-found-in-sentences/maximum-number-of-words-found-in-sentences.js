/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let output = 0;
    for(let i=0; i<sentences.length; i++){
        output = Math.max(sentences[i].split(" ").length, output)
    }
    return output
};