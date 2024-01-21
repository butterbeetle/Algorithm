/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    // [4,6,2,7,3]
    console.log(0^4^6, 0^4^6^2, 0^4^6^2^7, 0^4^6^2^7^3)
    const arr = [first]

    for(let i=0; i<encoded.length; i++){
        arr.push(arr[i]^encoded[i])
    }
    
    return arr
};