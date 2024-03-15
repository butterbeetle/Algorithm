/** 00:11:37
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    const output = [];

    // pop -> unshift -> 새거 unshift
    deck.sort((a, b) => a - b)
    output.push(deck.pop())

    while (deck.length) {
        output.unshift(output.pop())
        output.unshift(deck.pop())
    }

    return output
};