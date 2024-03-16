/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    const output = [];
    const map = new Map();

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    const arr = [...map].sort((a, b) => a[1] - b[1] || b[0] - a[0])

    for (const [n, c] of arr) {
        for (let i = 0; i < c; i++) {
            output.push(n)
        }
    }

    return output
};