/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const leftSum = [0]
    const rightSum = [0]

    for(let i=0, j=nums.length-1; i<nums.length-1; i++,j--){
        leftSum.push(leftSum[i]+nums[i]);
        rightSum.unshift(rightSum[0]+nums[j])
    }

    return leftSum.map((v,i)=>Math.abs(v-rightSum[i]))
};