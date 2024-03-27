/** 00:03:09
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    // 몇번째 row에 1이 몇개있는가?
    const rows = mat.length;
    const cols = mat[0].length;

    const output = [];

    for (let row = 0; row < rows; row++) {
        let cnt = 0;

        for (let col = 0; col < cols; col++) {
            if (mat[row][col]) cnt++;
        }

        output.push([row, cnt])
    }

    return output.sort((a, b) => b[1] - a[1] || a[0] - b[0])[0]
};