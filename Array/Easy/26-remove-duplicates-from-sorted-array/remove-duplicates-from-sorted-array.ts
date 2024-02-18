function removeDuplicates(nums: number[]): number {
    const t = [...new Set(nums)];
    nums.length = 0;
    nums.push(...t)
    return nums.length
};