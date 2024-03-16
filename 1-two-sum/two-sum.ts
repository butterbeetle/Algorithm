function twoSum(nums: number[], target: number): number[] {
    const output = []
    let i = 0;
    let j = nums.length

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                output.push(i, j);
                return output
            }
        }
    }
};