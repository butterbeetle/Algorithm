/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const p = []
    
    for(const i in nums){
        if(!(nums[i]))p.push(i)
    }

    for(const n of p.reverse()){
        nums.splice(n,1)
        nums.push(0)
    }

    return nums
};