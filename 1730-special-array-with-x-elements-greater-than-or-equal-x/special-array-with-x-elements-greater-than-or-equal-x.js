/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    let output = -1;
    const len = nums.length;

    for(let i=0; i<=len; i++){
        let tmp = 0;

        for(let j=0; j<len; j++){
            if(i < tmp) break;
            if(i <= nums[j]) tmp+=1;
        }
        
        if(i === tmp) output = tmp;
    }

    return !output ? -1 : output
};