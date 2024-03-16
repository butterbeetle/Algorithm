/** 00:10:37
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let output = []
    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        let curCharEnd = s.lastIndexOf(s[i])

        if (curCharEnd >= end) end = curCharEnd;

        if (end === i) {
            output.push(end - start + 1)
            start = i + 1;
        }
    }

    return output
};