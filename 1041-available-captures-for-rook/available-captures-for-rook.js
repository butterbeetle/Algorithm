/** 00:07:28
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    const n = 8;

    const capture = (row, col, r, c) => {
        if (row < 0 || col < 0 || row >= n || col >= n || board[row][col] === "B") return 0;
        else if (board[row][col] === "p") return 1;
        return capture(row + r, col + c, r, c)
    }

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (board[row][col] === "R") {
                const u = capture(row - 1, col, -1, 0);
                const d = capture(row + 1, col, 1, 0);
                const l = capture(row, col - 1, 0, -1);
                const r = capture(row, col + 1, 0, 1);

                return u + d + l + r
            }
        }
    }
};