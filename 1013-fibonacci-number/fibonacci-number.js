/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const arr = [0, 1]

    for(let i=2; i<=n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }

    return arr[n]
};
//    n = 1 2 3 4 5 6  7
// F(n) = 1 1 2 3 5 8 13