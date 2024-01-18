/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const fibo = [0,1,2,3]
    
    for(let i=4; i<=n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    
    return fibo[n]
};

/**
1 1
2 2
3 3
4 5
5 8
6 13
 */