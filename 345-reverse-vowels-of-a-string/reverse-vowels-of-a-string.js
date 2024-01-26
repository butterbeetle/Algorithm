/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const arr = [];
    let str = "";

    for (let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) arr.push(s[i])
    }

    for (let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) str += arr.pop()
        else str += s[i]
    }

    return str
};
