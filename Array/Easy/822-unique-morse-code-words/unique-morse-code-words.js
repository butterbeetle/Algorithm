/** 00:08:34
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz"
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",
    ".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    const map = new Map()
    const set = new Set()

    for(const i in alphabets){
        map.set(alphabets[i], morse[i])
    }

    for(const word of words){
        let mtw = "";
        for(const w of word){
            mtw += map.get(w)
        }
        set.add(mtw)
    }
    
    return set.size
};