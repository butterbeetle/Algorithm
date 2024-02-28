/** 00:02:33
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    cost.sort((a, b) => b - a);
    let output = 0;

    for (let i = 0; i < cost.length; i++) {
        if ((i + 1) % 3) output += cost[i]
    }
    
    return output
};