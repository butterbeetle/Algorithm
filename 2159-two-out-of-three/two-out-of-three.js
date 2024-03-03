/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    const s1 = new Set(nums1)
    const s2 = new Set(nums2)
    const s3 = new Set(nums3)
    const arr = Array.from(s1).concat(Array.from(s2)).concat(Array.from(s3))
    const m = new Map();

    for (const num of arr) {
        m.set(num, (m.get(num) || 0) + 1)
    }

    return [...m].filter(v => v[1] > 1).map(v => v[0])
};