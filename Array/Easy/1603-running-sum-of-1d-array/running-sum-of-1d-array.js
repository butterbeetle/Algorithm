/** 00:02:22
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.reduce((acc,cur,i)=>{
        acc.push(cur)
        if(i) acc[i] = acc[i-1]+acc[i]
        return acc
    },[])
};