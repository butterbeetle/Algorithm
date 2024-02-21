/** 00:05:48
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let output = 0;

    for (let i = low; i <= high; i++) {
        const str = i + ""
        if (!(str.length % 2)) {
            const x = [...str.substring(0, str.length / 2)].reduce((acc, cur) => acc + (+cur), 0)
            const y = [...str.substring(str.length / 2)].reduce((acc, cur) => acc + (+cur), 0)
            if (x === y) output++;
        }
    }

    return output
};