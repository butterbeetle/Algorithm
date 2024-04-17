/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
    let output = 0;

    piles.sort((a, b) => a - b);

    let i = 0;
    let j = piles.length - 2;

    while (i < j) {
        output += piles[j];
        i++;
        j -= 2;
    }

    return output
};