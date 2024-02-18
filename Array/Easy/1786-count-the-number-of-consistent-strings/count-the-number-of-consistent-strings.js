/** 00:11:38
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let output = 0;
    const set = new Set(allowed)

    for(const word of words){
        let isHave = true;
        for(const w of word){
            if(!set.has(w)) isHave = false
        }
        if(isHave) output++
    }

    return output
};