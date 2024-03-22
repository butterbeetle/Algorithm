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