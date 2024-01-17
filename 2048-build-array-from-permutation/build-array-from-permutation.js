/** 00:05:00
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const arr = Array.from({length: nums.length },()=>0)
    
    nums.forEach((num,i)=>{
        arr[i] = nums[num]
    })

    return arr
};