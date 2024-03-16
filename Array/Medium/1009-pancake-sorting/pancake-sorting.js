/** 00:38:31
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
    const flip = [];

    while (arr.length) {
        const max = Math.max(...arr)
        const index = arr.indexOf(max)
        if (index + 1 !== arr.length) {
            arr = arr.splice(0, index + 1).reverse().concat(arr).reverse();
            flip.push(index + 1, arr.length)
        }
        arr.pop()
    }

    return flip
};