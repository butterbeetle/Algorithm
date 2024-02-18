/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let sum = 0;

    for(let i=3; i<=n; i++){
        if( !(i%3) || !(i%5) || !(i%7) ) sum+=i
    }

    return sum
};