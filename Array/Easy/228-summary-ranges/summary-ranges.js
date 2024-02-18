/** 00:13:52
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const output = [];
    let s = nums[0]
    let e = s
    
    for(let i=0; i<nums.length; i++){
        if(nums[i+1]-nums[i] === 1) e = nums[i+1]
        else{ 
            if(s === e) output.push(`${s}`)
            else output.push(`${s}->${e}`)
            s = nums[i+1]
            e = s
        }
    }

    return output
};