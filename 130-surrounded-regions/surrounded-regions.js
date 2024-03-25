/** 01:31:38
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const rows = board.length;
    const cols = board[0].length;

    const x = (row, col) => {
        if (row < 0 || col < 0 ||
            row >= rows || col >= cols ||
            board[row][col] == 'X' || board[row][col] == 'C') {
            return
        }

        board[row][col] = "C"

        x(row - 1, col);
        x(row + 1, col);
        x(row, col - 1);
        x(row, col + 1);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] == "O" && (!row || !col || row === rows - 1 || col === cols - 1)) {
                x(row, col);
            }
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] == "C") board[row][col] = "O"
            else board[row][col] = "X"
        }
    }
};