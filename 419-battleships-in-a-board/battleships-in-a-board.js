/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
    let output = 0;
    const m = board.length;
    const n = board[0].length;

    const t = (row, col) => {
        if (row < 0 || col < 0 ||
            row >= m || col >= n ||
            board[row][col] === ".") return;

        board[row][col] = ".";

        t(row - 1, col);
        t(row + 1, col);
        t(row, col - 1);
        t(row, col + 1);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "X") {
                output++;
                t(i, j)
            }
        }
    }

    return output
};