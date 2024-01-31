/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
        if(n < sum) return i-1
    }

    return 1
};