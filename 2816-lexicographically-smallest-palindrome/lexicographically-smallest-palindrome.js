/** 00:05:12
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
    const len = s.length
    const arr = s.split("")

    for (let i = 0; i < len / 2; i++) {
        const front = arr[i]
        const back = arr[len - i - 1]
        if (front !== back) {
            if (front > back) arr[i] = back;
            else arr[len - i - 1] = front
        }
    }

    return arr.join("")
};