/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let output = 0;
    
    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) output += Math.min(tickets[i], tickets[k])
        else output += Math.min(tickets[i], tickets[k]-1)
    }

    // while (tickets[k]) {
    //     for (let i = 0; i < tickets.length; i++) {
    //         if (tickets[i]) {
    //             output++;
    //             tickets[i]--;
    //         }
    //         if (!tickets[k]) break;
    //     }
    // }

    return output
};