/** 00:05:00
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const arr = []
    
    // 65ms
    nums.forEach((num,i)=>{
        arr[i] = nums[num]
    })

    //67ms
    // for(let i=0; i<nums.length; i++){
    //     arr[i] = nums[nums[i]]
    // }

    return arr
};