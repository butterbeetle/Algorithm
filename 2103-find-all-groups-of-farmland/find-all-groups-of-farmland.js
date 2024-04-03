/** 00:32:57
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
    const output = [];
    const rows = land.length;
    const cols = land[0].length;

    const findGroup = (row, col, tmp) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols || !land[row][col]) return;
        land[row][col] = 0;

        tmp.push([row, col])

        findGroup(row - 1, col, tmp);
        findGroup(row + 1, col, tmp);
        findGroup(row, col - 1, tmp);
        findGroup(row, col + 1, tmp);

        if (tmp.length > 1 && (tmp[tmp.length - 1][0] < row || tmp[tmp.length - 1][1] < col)) {
            tmp.pop();
        }

    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let tmp = [[row, col]];
            if (land[row][col]) {
                findGroup(row, col, tmp)
                output.push([tmp[0][0], tmp[0][1], tmp[tmp.length - 1][0], tmp[tmp.length - 1][1]])
            }
        }
    }

    return output
};