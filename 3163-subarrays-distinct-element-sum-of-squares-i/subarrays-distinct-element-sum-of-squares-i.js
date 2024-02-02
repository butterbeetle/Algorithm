/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let output = 0;
    for(let i=0; i<nums.length; i++){
        let sum = 0;
        for(let j=0; j<nums.length-i; j++){
            sum += new Set(nums.slice(j,j+i+1)).size ** 2
        }
        output += sum
    }
    return output
};