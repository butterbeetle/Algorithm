/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map()
    for(const i of nums){
        map.set(i, (map.get(i)||0)+1)
    }
    
    for(const [k,v] of map){
        if(v === 1) return k
    }
};