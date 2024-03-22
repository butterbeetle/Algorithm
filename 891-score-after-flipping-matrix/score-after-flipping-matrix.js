/** 00:32:03
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {
    let output = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    // 행 처리
    for (let i = 0; i < rows; i++) {
        if (grid[i][0] !== 1) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j]) grid[i][j] = 0;
                else grid[i][j] = 1;
            }
        }
    }

    // 열 처리
    for (let i = 1; i < cols; i++) {
        let ones = 0;
        let zeros = 0;
        for (let j = 0; j < rows; j++) {
            if (grid[j][i]) ones++;
            else zeros++;
        }

        if (zeros >= ones) {
            for (let j = 0; j < rows; j++) {
                if (grid[j][i]) grid[j][i] = 0;
                else grid[j][i] = 1;
            }
        }
    }

    // 계산
    for (let i = 0; i < rows; i++) {
        output += parseInt(grid[i].join("").toString(2), 2)
    }

    return output
};