/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // const hashmap = new Map();
    // const array = [...nums].sort((a,b) => a - b);
    // for (let i = 0; i < array.length; i++) {
    //     if (!hashmap.has(array[i])) hashmap.set(array[i], i);
    // }
    // console.log(hashmap)
    // for (let i = 0; i < nums.length; i++) {
    //     nums[i] = hashmap.get(nums[i]);
    // }
    // return nums;
    return nums.map(m=> nums.filter(f=>m>f).length)
};