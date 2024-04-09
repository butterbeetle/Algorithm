/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
    const rows = board.length;
    const cols = board[0].length;
    const sr = click[0];
    const sc = click[1];

    if (board[sr][sc] === "M") {
        board[sr][sc] = "X"
        return board;
    }

    const isThatMines = (row, col) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols) return 0;

        if (board[row][col] === "M") return 1;
        else return 0;
    }

    const minesweeper = (row, col) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols ||
            board[row][col] === "M" || board[row][col] === "B" || board[row][col] > 0 || board[row][col] < 9) return;

        const mines = (
            isThatMines(row - 1, col - 1) +
            isThatMines(row - 1, col) +
            isThatMines(row - 1, col + 1) +
            isThatMines(row, col - 1) +
            isThatMines(row, col + 1) +
            isThatMines(row + 1, col - 1) +
            isThatMines(row + 1, col) +
            isThatMines(row + 1, col + 1)
        );

        if (mines) {
            board[row][col] = mines + "";
            return;
        }

        board[row][col] = "B"

        minesweeper(row - 1, col - 1)
        minesweeper(row - 1, col)
        minesweeper(row - 1, col + 1)
        minesweeper(row, col - 1)
        minesweeper(row, col + 1)
        minesweeper(row + 1, col - 1)
        minesweeper(row + 1, col)
        minesweeper(row + 1, col + 1)
    }

    minesweeper(sr, sc)

    return board
};
/**
["B", 1, "E", 1, "B"]
["B", 1, "M", 1, "B"]
["B", 1,  2, "B","B"]
["B","B","B","B","B"]
 */