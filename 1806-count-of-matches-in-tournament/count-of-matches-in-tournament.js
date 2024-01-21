/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let allMatches = 0
    while(n>1){
        const matches = Math.floor(n/2);
        n -= matches;
        allMatches += matches
    }
    return allMatches
};