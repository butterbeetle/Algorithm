/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    let pos = 0;

    while (arr.length > 1) {
        pos += k - 1
        pos %= arr.length;
        arr.splice(pos, 1)
    }

    return arr[0]
};
1, 2, 3, 4, 5, 6
1, 2, 3, 4, 6
1, 2, 3, 6
1, 2, 3
1, 3
1