/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    const find = (s, e) => {
        const m = Math.floor((s + e) / 2);
        if (!guess(m)) return m;
        else if (guess(m) === 1) return find(m + 1, e);
        else return find(s, m - 1);
    }

    return find(0, n)
};