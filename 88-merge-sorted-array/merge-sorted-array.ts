/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const temp = [...nums1.slice(0,m),...nums2.slice(0,n)].sort((a,b)=>a-b);
    nums1.length = 0;
    nums1.push(...temp)
    return ;
};