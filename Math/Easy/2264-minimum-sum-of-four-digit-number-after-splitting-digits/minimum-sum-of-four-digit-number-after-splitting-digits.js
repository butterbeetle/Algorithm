/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const array = num.toString().split("").map(Number).sort((a,b)=>a-b)
    return (array[0]*10)+array[2] + (array[1]*10)+array[3]
};