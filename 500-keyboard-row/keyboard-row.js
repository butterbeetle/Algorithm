/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let output = []
    const s1 = new Set("qwertyuiop")
    const s2 = new Set("asdfghjkl")
    const s3 = new Set("zxcvbnm")

    for(const word of words){
        let s1_has = true
        let s2_has = true
        let s3_has = true

        for(const w of word.toLowerCase()){
            if(!s1.has(w)) s1_has = false;
            if(!s2.has(w)) s2_has = false;
            if(!s3.has(w)) s3_has = false;
        }

        if(s1_has || s2_has || s3_has) output.push(word)
    }

    return output
};