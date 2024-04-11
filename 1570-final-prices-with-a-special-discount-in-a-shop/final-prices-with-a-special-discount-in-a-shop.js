/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    const stack = [];
    const output = [...prices];
    // 10 1 1 6
    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[i] <= prices[stack[stack.length - 1]]) {
            const idx = stack.pop();
            output[idx] = prices[idx] - prices[i];
        }
        stack.push(i)
    }

    return output
};