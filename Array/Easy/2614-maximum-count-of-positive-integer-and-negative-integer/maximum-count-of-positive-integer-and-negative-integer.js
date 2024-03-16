/** 00:00:48
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let positive = 0;
    let negative = 0;

    for (const num of nums) {
        if (num < 0) negative++;
        else if(num > 0) positive++;
    }

    return positive > negative ? positive : negative
};