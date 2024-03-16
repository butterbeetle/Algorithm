/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    let output = 0;
    const m = matrix[0].length;
    const n = matrix.length;
    const dp = Array.from({ length: n }, () => new Array(m).fill(0));

    for (let i = 0; i < n; i++) dp[i][0] = matrix[i][0];
    for (let i = 0; i < m; i++) dp[0][i] = matrix[0][i];

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (!matrix[i][j]) dp[i][j] = 0;
            else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            output += dp[i][j]
        }
    }

    return output
};