/** 02:01:01
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    const len = nums.length;
    const max = Math.max(...nums);

    let output = 0;
    let l = 0;
    let r = 0;
    let kk = k;

    while (r < len) {

        if (nums[r] === max) kk--
        r++;

        while (!kk) {

            if (nums[l] === max) kk++;
            l++
        }

        output += l;
    }

    return output
};