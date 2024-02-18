/** 00:05:18
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const a = s.substring(0, s.length/2)
    const b = s.substring(s.length/2)
    
    let a_cnt = 0;
    let b_cnt = 0;

    for(const i in a){
        if(vowels.includes(a[i])) a_cnt++;
        if(vowels.includes(b[i])) b_cnt++;
    }

    return a_cnt === b_cnt
};