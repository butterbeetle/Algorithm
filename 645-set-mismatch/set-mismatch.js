/** 00:12:45
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const map = new Map()
    const arr = [0,0]

    for(const i in nums){
        map.set(nums[i], (map.get(nums[i])||0)+1)
    }
    console.log(map)
    for(const i in nums){
        if(map.get(+i+1) > 1) arr[0] = +i+1
        else if(map.get(+i+1) === undefined) arr[1] = +i+1
    }

    return arr
};