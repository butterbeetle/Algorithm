/**
 * @param {number[]} nums1
 * @param {number[]} sortedNums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const output = []
    const m = new Map()

    for (const n of nums1) {
        m.set(n, (m.get(n) || 0) + 1)
    }

    for (const n of nums2) {
        if (m.has(n) && m.get(n) > 0) {
            output.push(n)
            m.set(n, m.get(n) - 1)
        }
    }

    return output
};