/** 00:05:00
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = arr.reduce((acc,cur)=>acc.set(cur,(acc.get(cur)||0)+1),new Map)
    const set = new Set(map.values())

    return map.size === set.size
}