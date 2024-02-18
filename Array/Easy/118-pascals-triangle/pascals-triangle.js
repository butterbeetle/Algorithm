/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const ans = Array.from({length:numRows},()=>[])
    for(let i=0; i<numRows; i++){ // 0 1 2 3 4
        for(let j=0; j<=i; j++){ // 0, 01, 012, 0123, 01234
            if(j === 0 || j === i) ans[i][j] = 1;
            else ans[i][j] = ans[i-1][j-1] + ans[i-1][j]
        }
    }
    return ans
};