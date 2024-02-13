/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    let output = 0;
    const arr = nums.sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i += 2) {
        output += arr[i]
    }

    return output
};