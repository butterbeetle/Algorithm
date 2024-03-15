/** 00:11:37
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    // pop -> unshift -> 새거 unshift
    deck.sort((a, b) => a - b)
    const output = [deck.pop()];

    while (deck.length) {
        output.unshift(output.pop())
        output.unshift(deck.pop())
    }

    return output
};