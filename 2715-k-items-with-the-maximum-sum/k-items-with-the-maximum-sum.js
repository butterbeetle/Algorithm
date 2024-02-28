/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
    let output = 0;

    for (let i = 1; i <= k; i++) {
        if (i <= numOnes) output++;
        else if (i <= numOnes + numZeros) continue;
        else output--;
    }
    
    return output
};