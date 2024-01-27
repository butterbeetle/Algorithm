/** 00:13:52
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const output = [];
    if(!nums.length) return output
    let s = nums[0]
    let e = s
    
    for(let i=1; i<nums.length; i++){
        if(nums[i]-nums[i-1] === 1) e = nums[i]
        else{ 
            if(s === e) output.push(`${s}`)
            else output.push(`${s}->${e}`)
            s = nums[i]
            e = s
        }
    }
    
    if(s === e) output.push(`${s}`)
    else output.push(`${s}->${e}`)

    return output
};