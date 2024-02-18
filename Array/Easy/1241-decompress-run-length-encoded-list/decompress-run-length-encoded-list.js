/** 00:04:10
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let output = []

    for(let i=0; i<nums.length; i+=2){
        let freq = nums[i]
        let val = nums[i+1]
        for(let j=0; j<freq; j++){
            output.push(val)
        }
    }

    return output
};