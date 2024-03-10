/** 00:15:40
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const output = Array.from({ length: n }, () => new Array(n).fill(0))
    const size = n * n

    let count = 1;
    let row = 0;
    let col = -1;
    let inc = 1;

    while (count <= size) {
        for (let i = 0; i < n; i++) {
            col += inc;
            output[row][col] = count++;
        }
        n--;

        for (let i = 0; i < n; i++) {
            row += inc;
            output[row][col] = count++;
        }
        inc *= -1;
    }

    return output
};