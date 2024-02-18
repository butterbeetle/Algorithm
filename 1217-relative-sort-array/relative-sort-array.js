/** 00:10:44
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    const output = [];
    const m = new Map();

    for (let i = 0; i < arr1.length; i++) {
        m.set(arr1[i], (m.get(arr1[i]) || 0) + 1)
    }

    for (let i = 0; i < arr2.length; i++) {
        if (m.has(arr2[i])) {
            for (let j = 0; j < m.get(arr2[i]); j++) {
                output.push(arr2[i])
            }
            m.delete(arr2[i])
        }
    }

    const sorted = [...m].sort((a, b) => a[0] - b[0])

    for (const [k, v] of sorted) {
        for (let i = 0; i < v; i++) {
            output.push(k)
        }
    }

    return output
};