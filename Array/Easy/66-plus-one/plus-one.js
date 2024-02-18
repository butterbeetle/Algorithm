/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 48ms
    digits.unshift(0)
    digits[digits.length - 1] += 1;

    for(let i=digits.length-1; i>=0; i--){
        if(digits[i] === 10){
            digits[i] = 0;
            digits[i-1] += 1;
        }
    }

    return !digits[0] ? digits.splice(1) : digits

    // 49ms
    //return (BigInt(digits.join(""))+1n).toString().split("")
};