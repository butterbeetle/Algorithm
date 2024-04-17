/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
    piles.sort((a, b) => a - b);

    let alice = 0;
    let bob = 0;

    while (piles.length) {
        alice += piles.pop();
        bob += piles.pop();
    }

    return alice > bob
};