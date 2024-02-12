/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    // return !(Math.sqrt(num) % 1)
    if(num === 1) return true

    for (let i = 1; i <= num / 2; i++) {
        if (i ** 2 === num) return true
    }
    
    return false
};