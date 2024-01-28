/** 00:02:49
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const map = new Map();

    for (let i = 0; i < nums2.length; i++) {
        for (let j = i + 1; j < nums2.length; j++) {
            if (nums2[i] < nums2[j]) {
                map.set(nums2[i], nums2[j]);
                break;
            }
        }

        if(!map.has(nums2[i])) map.set(nums2[i], -1);
    }

    return nums1.map(v => map.get(v))
};