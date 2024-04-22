/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
    const rMap = new Map();
    const sMap = new Map();

    for (let i = 0; i < ranks.length; i++) {
        rMap.set(ranks[i], (rMap.get(ranks[i]) || 0) + 1);
        sMap.set(suits[i], (sMap.get(suits[i]) || 0) + 1);
    }

    for (const value of sMap.values()) {
        if (value === 5) return "Flush"
    }

    let isPair = false;

    for (const value of rMap.values()) {
        if (value >= 3) return "Three of a Kind"
        else if (value >= 2) isPair = true;
    }

    if (isPair) return "Pair"
    return "High Card"
};