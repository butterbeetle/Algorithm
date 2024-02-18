/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    const sorted = nums.sort((a,b)=>a-b);

    for(let i=0; i<nums.length; i+=2){
        [sorted[i], sorted[i+1]] = [sorted[i+1], sorted[i]]
    }

    return sorted
};