/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    costs.sort((a, b) => a - b)
    let output = 0;

    for (const cost of costs) {
        if (cost <= coins) {
            coins -= cost;
            output++;
        } else break;
    }

    return output
};