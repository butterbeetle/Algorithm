/** 00:29:45
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
    let l = 2;
    let output = -1;

    while (l <= nums.length) {
        for (let i = l; i <= nums.length; i++) {
            let noop = false
            const slice_arr = nums.slice(i - l, i);
            const len = slice_arr.length

            for (let j = 1; j < len; j++) {
                if (slice_arr[j] - slice_arr[j - 1] !== Math.pow(-1, j + 1)) noop = true
                if (noop) break;
            }
            
            if (!noop) output = Math.max(output, len)
        }
        l++;
    }

    return output
};
