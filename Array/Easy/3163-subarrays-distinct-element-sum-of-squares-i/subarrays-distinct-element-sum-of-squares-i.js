/** 00:16:21
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
    const nLen = nums.length
    let output = 0;

    for (let i = 0; i < nLen; i++) {
        let sum = 0;
        for (let j = 0; j < nLen - i; j++) {
            sum += new Set(nums.slice(j, j + i + 1)).size ** 2
        }
        output += sum
    }

    return output
};