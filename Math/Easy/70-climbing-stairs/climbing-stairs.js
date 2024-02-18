/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const step = [0,1,2,3]
    
    for(let i=4; i<=n; i++){
        step[i] = step[i-1] + step[i-2]
    }

    return step[n]
};

/**
1 1
2 2
3 3
4 5
5 8
6 13
 */