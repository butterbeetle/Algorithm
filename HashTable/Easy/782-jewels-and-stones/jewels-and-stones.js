/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) { 
    return [...stones].reduce((acc,cur)=> jewels.includes(cur) ? acc+=1 : acc ,0)
};