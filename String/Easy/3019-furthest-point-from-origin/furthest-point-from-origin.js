/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let cnt = 0;
    let m = 0;

    for(const move of moves){
        if(move === "L") cnt++;
        else if(move === "R") cnt--;
        else m++;
    }

    return Math.abs(cnt)+m
};