/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const output = [];

    const permutations = (nums, arr) => {

        if (!nums.length) {
            output.push(arr)
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            const tmp = [...nums];
            const v = tmp.splice(i, 1)[0]
            permutations(tmp, [...arr, v])
        }
    }

    permutations(nums, [])

    return output
};