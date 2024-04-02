/** 00:11:01
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;

    if (prices.length === 1) return 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - prices[i - 1] > 0) profit += prices[i] - prices[i - 1]
    }

    return profit
};