/** 00:06:31
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const arrivals = cost.length;
    const dp = new Array(arrivals).fill(0)

    for (let i = 0; i < arrivals; i++) {
        if (i < 2) dp[i] = cost[i];
        else dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
    }

    return Math.min(dp[arrivals - 1], dp[arrivals - 2])
};
