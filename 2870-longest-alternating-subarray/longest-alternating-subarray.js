/** 00:29:45
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
    let l = 2;
    let output = -1;

    while (l <= nums.length) {
        for (let i = l; i <= nums.length; i++) {
            const slice_arr = nums.slice(i - l, i);
            const len = slice_arr.length
            if (len >= 3) {
                let noop = false
                for (let j = 1; j < len; j++) {
                    if (slice_arr[j] - slice_arr[j - 1] !== Math.pow(-1, j + 1)) noop = true
                    if (noop) break;
                }
                if (!noop) output = output < len ? len : output
            } else if(slice_arr[1] === slice_arr[0] + 1) output = output < len ? len : output
        }
        l++;
    }

    return output
};
