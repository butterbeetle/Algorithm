/** 00:05:48
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    if ((low.length % 2) && low.length === high.length) return 0;
    let output = 0;

    for (let i = low; i <= high; i++) {
        const str = i + ""
        if (!(str.length % 2)) {
            const x = str.substring(0, str.length / 2).split("").reduce((acc, cur) => acc + (+cur), 0)
            const y = str.substring(str.length / 2).split("").reduce((acc, cur) => acc + (+cur), 0)
            if (x === y) output++;
        }
    }

    return output
};