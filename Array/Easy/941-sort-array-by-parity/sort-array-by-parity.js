/** 00:03:00
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    const odd = nums.filter(n => n % 2)
    const even = nums.filter(n => !(n % 2))

    return even.concat(odd)
};