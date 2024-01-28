/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let output = "";
    let reverse = true;
    const arr = s.split("")
    for(let i=0; i<s.length; i+=k){
        if(reverse){
            output += arr.slice(i,i+k).reverse().join("")
        }else{
            output += arr.slice(i,i+k).join("")
        }
        reverse = !reverse
        console.log(output, arr.slice(i,i+k))
    }
    return output
};