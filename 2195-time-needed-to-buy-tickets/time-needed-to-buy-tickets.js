/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let output = 0;

    while (tickets[k]) {
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i]) {
                output++;
                tickets[i]--;
            }
            if (!tickets[k]) break;
        }
    }

    return output
};