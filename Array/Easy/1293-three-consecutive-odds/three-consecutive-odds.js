/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    let combo = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2) combo++;
        else combo = 0;

        if (combo === 3) return true
    }

    return false
};