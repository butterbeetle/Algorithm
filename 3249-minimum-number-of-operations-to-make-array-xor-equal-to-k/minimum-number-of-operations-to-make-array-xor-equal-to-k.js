/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let output = 0;
    const nn = nums.reduce((acc, cur) => acc ^ cur, 0).toString(2).padStart(20, 0)
    const kk = k.toString(2).padStart(20, 0)

    for (let i = 0; i < 20; i++) {
        if (nn[i] !== kk[i]) output++;
    }

    return output
};