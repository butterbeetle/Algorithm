/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
    }
    
    let sum = 0;

    for(let i=0; i<s.length-1; i++){
        sum = roman[s[i]] < roman[s[i+1]] 
        ? sum -= roman[s[i]] 
        : sum += roman[s[i]]   
    }

    return sum + roman[s.at(-1)]
};