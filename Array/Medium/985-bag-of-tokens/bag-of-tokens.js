/** 00:24:13
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
    // up 하면 power -= token[i] 하고 score + 1 , *power가 token[i]보다 클 때 
    // down 하면 power += token[i] 하고 score - 1
    let score = 0;
    let maxScore = 0;
    let i = 0;
    let j = tokens.length - 1
    tokens.sort((a, b) => a - b)

    while (i <= j) {
        const minToken = tokens[i];
        const maxToken = tokens[j];
        if (minToken <= power) {
            power -= minToken;
            score++;
            i++;
            maxScore = Math.max(score, maxScore)
        } else if (score > 0) {
            power += maxToken;
            score--;
            j--;
        } else break;
    }

    return maxScore
};