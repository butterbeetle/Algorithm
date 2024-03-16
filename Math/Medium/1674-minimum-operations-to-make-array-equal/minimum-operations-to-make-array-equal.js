/** 00:09:49
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
    let output = 0;
    const arr = new Array(n).fill(0).map((_, i) => (2 * i) + 1)

    for (let i = 0; i < n / 2; i++) {
        const shift = arr.shift();
        const pop = arr.pop();
        if (shift && pop) {
            output += (shift + pop) / 2 - shift
        }
    }

    return output
};

// n=4 -> 4
// 1 3 5 7  
// 3
// 4 3 5 4
// 1

// n=5 -> 6
// 1 3 5 7 9 