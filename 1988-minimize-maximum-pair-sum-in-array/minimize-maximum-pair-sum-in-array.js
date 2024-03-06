/** 00:08:49
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    nums.sort((a, b) => a - b)
    
    let output = 0;
    let i = 0
    let j = nums.length - 1
    while (i < j) {
        let num1 = nums[i]
        let num2 = nums[j]
        output = Math.max(output, num1 + num2)
        i++
        j--
    }

    return output
};