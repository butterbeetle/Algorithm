/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let sum = 0;

    const map = nums.reduce((acc,cur)=>
        acc.set(cur, (acc.get(cur)||0)+1), new Map)

    for(const n of map.values()){
        sum += n*(n-1)/2;
    }

    return sum
};