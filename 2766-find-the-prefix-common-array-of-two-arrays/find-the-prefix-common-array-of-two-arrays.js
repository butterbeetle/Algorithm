/** 00:07:44
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let output = [];
    const aMap = new Map();

    for (let i = 0; i < A.length; i++) {
        let cnt = 0;
        for (let j = 0; j <= i; j++) {
            aMap.set(A[j], (aMap.get(A[j]) || 0) + 1);
        }
        for (let j = 0; j <= i; j++) {
            if (aMap.has(B[j])) cnt++;
        }
        output.push(cnt)
    }

    return output
};