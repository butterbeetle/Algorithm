/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let index1 = 0;
    let index2 = 0;

    for(let i=0; i<nums.length; i++){
        const s = index1;
        const r = nums[i] + index2;
        const m = Math.max(s, r);
        
        index2 = index1;
        index1 = m
    }

    return index1
};
