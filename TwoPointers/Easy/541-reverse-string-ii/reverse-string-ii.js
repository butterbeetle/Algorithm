/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let output = "";
    let reverse = true;
    
    for(let i=0; i<s.length; i+=k){
        if(reverse) output += s.substring(i,i+k).split("").reverse().join("")
        else output += s.substring(i,i+k)

        reverse = !reverse
    }
    // for (let i = 0; i < s.length; i += 2*k) {
    //     let reversedStr = s.substring(i, i+k).split('').reverse().join('');
    //     console.log(output.substring(0, i), reversedStr,s.substring(i + k))
    //     output = output.substring(0, i) + reversedStr + s.substring(i + k);
    // }
    return output
};