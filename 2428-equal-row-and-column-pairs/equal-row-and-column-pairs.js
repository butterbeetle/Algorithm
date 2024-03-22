/** 00:30:48
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    let count = 0;
    const length = grid.length;
    const rowsArr = []
    const colsArr = []

    for (let i = 0; i < length; i++) {
        let rowStr = "";
        let colStr = "";

        for (let j = 0; j < length; j++) {
            rowStr += grid[j][i] + "#"
            colStr += grid[i][j] + "#"
        }

        rowsArr.push(rowStr)
        colsArr.push(colStr)
    }

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (rowsArr[i] === colsArr[j]) count++
        }
    }

    return count
};
/*
var equalPairs = function (grid) {
    let count = 0;
    const length = grid.length;
    const rowsArr = []
    const colsArr = []

    for (let i = 0; i < length; i++) {
        let rows = [];
        let cols = [];
        for (let j = 0; j < length; j++) {
            rows.push(grid[j][i])
            cols.push(grid[i][j])
        }
        rowsArr.push(rows)
        colsArr.push(cols)
    }

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            let isSame = true
            for (let k = 0; k < length; k++) {
                if (rowsArr[i][k] !== colsArr[j][k]) {
                    isSame = false;
                    break;
                }
            }
            if (isSame) count++
        }
    }

    return count
};
*/
