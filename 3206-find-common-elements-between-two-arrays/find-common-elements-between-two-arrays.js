/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
    const output = [0, 0]

    for (let v of nums1) {
        if (nums2.includes(v)) output[0]++;
    }


    for (let v of nums2) {
        if (nums1.includes(v)) output[1]++;
    }

    return output
};