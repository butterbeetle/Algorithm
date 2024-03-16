/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let odd = 0;
    let even = 0;

    for(const p of position){
        if(!(p%2)) even++;
        else odd++;
    }

    return odd > even ? even : odd
};