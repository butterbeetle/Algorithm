/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
    let output = 0;

    piles.sort((a, b) => a - b);

    while (piles.length) {
        piles.pop();
        output += piles.pop();
        piles.shift();
    }

    return output
};