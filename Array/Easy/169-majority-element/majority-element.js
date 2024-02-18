/** 00:08:30
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    let maxNum = 0;

    for(const n of nums){
        map.set(n, (map.get(n)||0)+1)
        if(map.get(n) > (map.get(maxNum)??0)){
            maxNum = n
        }
    }

    return maxNum
};