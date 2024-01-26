/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const arr = [];
    let str = "";

    const isVowel = (c) => {
        if (vowels.includes(c)) return true
        return false
    }

    for (let i = 0; i < s.length; i++) {
        if(isVowel(s[i])) arr.push(s[i])
    }

    for (let i = 0; i < s.length; i++) {
        if(isVowel(s[i])) str += arr.pop()
        else str += s[i]
    }

    return str
};
