/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let startChar = strs.shift();
    let str = "";

    for(let i=0; i<startChar.length; i++){
        if(strs.every(s => s[i] === startChar[i])) str += startChar[i]
        else break;
    }

    return str
};