/** 00:32:57
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
    const output = [];
    const rows = land.length;
    const cols = land[0].length;
    let bRow = 0;
    let bCol = 0;

    const findGroup = (row, col) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols || !land[row][col]) return;
        land[row][col] = 0;

        if (row > bRow) bRow = row;
        if (col > bCol) bCol = col;

        findGroup(row + 1, col);
        findGroup(row, col + 1);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let tmp = [[row, col]];
            if (land[row][col]) {
                findGroup(row, col, tmp)
                output.push([row, col, bRow, bCol])
                bRow = 0;
                bCol = 0;
            }
        }
    }

    return output
};