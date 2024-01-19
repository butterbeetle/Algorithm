/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    return words.reduce((acc,cur,i)=>{
        if(cur.includes(x)) acc.push(i)
        return acc
    },[])
};