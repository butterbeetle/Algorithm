/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const arr = [];
    let str = "";

    const isVowel = (c) => {
        if (c === "a" || c === "A" ||
            c === "e" || c === "E" ||
            c === "i" || c === "I" || 
            c === "o" || c === "O" || 
            c === "u" || c === "U" ) return true
        return false
    }

    for (let i = 0; i < s.length; i++) {
        if(isVowel(s[i])) arr.push(s[i])
    }

    const reverse = arr.reverse();
    
    for (let i = 0; i < s.length; i++) {
        if(isVowel(s[i])) str += reverse.shift()
        else str += s[i]
    }

    return str
};
