/** 00:16:38
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
    let output = new Array(l.length).fill(true)

    for (let i = 0; i < l.length; i++) {
        const arr = nums.slice(l[i], r[i] + 1).sort((a, b) => a - b)

        let ans = -1;
        for (let j = 1; j < arr.length; j++) {
            if (ans < 0) ans = Math.abs(arr[j - 1] - arr[j]);
            else if (ans !== Math.abs(arr[j - 1] - arr[j])) output[i] = false;
        }
    }

    return output
};