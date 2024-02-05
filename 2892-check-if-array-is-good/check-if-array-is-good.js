/** 00:14:15
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    const map = new Map();
    const sorted = nums.sort((a,b)=>a-b);
    const base = sorted[nums.length-1]
    
    if(nums.length <= base) return false

    console.log(sorted)
    let i=0;
    while(i<nums.length-1){
        if(sorted[i] !== (i+1)) return false
        map.set(nums[i], (map.get(nums[i])||0)+1)
        i++;
    }
    
    map.set(nums[i], (map.get(nums[i])||0)+1)

    console.log(map)
    return map.get(base) === 2
};