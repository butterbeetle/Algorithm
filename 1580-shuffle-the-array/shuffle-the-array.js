/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const arr = []
    for(let i=0; i<n; i++){
        arr.push(nums[i], nums[i+n])
    }
    return arr
};