/** 00:03:09
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    // 몇번째 row에 1이 몇개있는가?
    const rows = mat.length;
    const cols = mat[0].length;

    let output = [0, 0];

    for (let row = 0; row < rows; row++) {
        let cnt = 0;

        for (let col = 0; col < cols; col++) {
            if (mat[row][col]) cnt++;
        }

        if (cnt > output[1]) {
            output = [row, cnt]
        }
    }

    return output
};