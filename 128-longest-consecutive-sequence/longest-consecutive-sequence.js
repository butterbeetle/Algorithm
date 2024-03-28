/** 00:21:30
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let output = 0;
    const set = new Set(nums);

    for (const num of nums) {

        if (!set.has(num - 1)) {
            let length = 0;

            while (set.has(num + length)) {
                length += 1;
            }

            output = Math.max(length, output)
        }

    }

    return output
};