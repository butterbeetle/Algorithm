/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const box_start = [0, 3, 6, 27, 30, 33, 54, 57, 60];

    for (let i = 0; i < 9; i++) {
        console.log(`${i} ----------------`)
        const row_set = new Set();
        const col_set = new Set();
        const box_set = new Set();
        let box_index = box_start[i]

        let cnt = 0;
        for (let j = 0; j < 9; j++) {
            // row
            console.log(row_set)
            if (row_set.has(board[j][i])) return false
            else if (board[j][i] !== ".") row_set.add(board[j][i])

            // col
            console.log(col_set)
            if (col_set.has(board[i][j])) return false
            else if (board[i][j] !== ".") col_set.add(board[i][j])

            // box
            const index = box_index + cnt
            const box_row = parseInt(index / 9) || 0;
            const box_col = index % 9 || 0

            if (box_row >= 9 || box_col >= 9) break;
            console.log(index, board[box_row][box_col], box_row, box_col,box_set)
            if (box_set.has(board[box_row][box_col])) {
                console.log("why wrong", box_set, board[box_row][box_col])
                return false
            }
            else if (board[box_row][box_col] !== ".") box_set.add(board[box_row][box_col])

            cnt++
            if (!(cnt % 3)) box_index += 6;
        }
    }

    return true;
};
// i=0
//  0  1  2 | 0,0 0,1 0,2 | j=0
//  9 10 11 | 1,0 1,1 1,2 | j=1
// 18 19 20 | 2,0 2,1 2,2 | j=2

// i=1
//  3  4  5 | 0,3 0,4 0,5 | j=0
// 12 13 14 | 1,3 1,4 1,5 | j=1
// 21 22 23 | 2,3 2,4 2,5 | j=2

// i=2
//  6  7  8
// 15 16 17
// 24 25 26