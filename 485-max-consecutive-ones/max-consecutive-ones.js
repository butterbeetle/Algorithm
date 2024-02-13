/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let output = 0;
    const arr = nums.join("").split("0")

    for (let i = 0; i < arr.length; i++) {
        output = output < arr[i].length ? arr[i].length : output
    }

    return output
};