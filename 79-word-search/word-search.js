/** 00:11:46
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let output = false;

    const arr = word.split("");
    const rows = board.length;
    const cols = board[0].length;

    const x = (row, col, idx) => {
        if (row < 0 || col < 0 ||
            row >= rows || col >= cols ||
            arr[idx] !== board[row][col]) return

        // console.log(`board[${row}][${col}], Arr[${idx}]:${arr[idx]}`)
        if (idx === word.length - 1) {
            output = true;
            return;
        }
        const tmp = board[row][col];
        board[row][col] = 0;

        x(row - 1, col, idx + 1) // up
        x(row + 1, col, idx + 1) // down
        x(row, col - 1, idx + 1) // left
        x(row, col + 1, idx + 1) // right

        board[row][col] = tmp;
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] === arr[0]) {
                x(row, col, 0)
            }
        }
    }

    return output
};