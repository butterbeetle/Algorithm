/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    for (const num of nums2) {
        if (set1.has(num)) {
            set1.delete(num)
            set2.delete(num)
        }
    }

    return [[...set1], [...set2]]
};