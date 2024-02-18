/** 00:54:10
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let lowPrice = prices[0]

    for(let i=1; i<prices.length; i++){
        const curPrice = prices[i]
        const curProfit = Math.abs(lowPrice - curPrice)
        if(curPrice < lowPrice) lowPrice = curPrice
        else profit = profit < curProfit  ? curProfit : profit
    }

    return profit
};