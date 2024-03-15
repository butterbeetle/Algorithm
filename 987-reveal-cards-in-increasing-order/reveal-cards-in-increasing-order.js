/** 00:11:37
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    const output = [];

    // pop -> unshift -> 새거 unshift
    deck.sort((a,b)=>a-b)
    output.push(deck.pop())

    while(deck.length){
        const num = deck.pop();
        console.log(output,num)
        output.unshift(output.pop())
        output.unshift(num)
    }

    return output
};