/** 00:28:14
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    const m = board.length
    const n = board[0].length

    const myNeighbors = (row, col, cnt) => {
        if (row < 0 || col < 0 ||
            row >= m || col >= n || cnt === 2) return 0;

        cnt++;

        return (board[row][col] % 2)
            + myNeighbors(row - 1, col - 1, cnt) + myNeighbors(row - 1, col, cnt) + myNeighbors(row - 1, col + 1, cnt)
            + myNeighbors(row, col - 1, cnt) + myNeighbors(row, col + 1, cnt)
            + myNeighbors(row + 1, col - 1, cnt) + myNeighbors(row + 1, col, cnt) + myNeighbors(row + 1, col + 1, cnt)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const neighbors = myNeighbors(i, j, 0) - (board[i][j] % 2)
            // console.log(`Board[${i}][${j}]'s Neighbors:${neighbors}`)
            if (!board[i][j] && neighbors === 3) board[i][j] += 2
            else if (board[i][j] && (neighbors === 2 || neighbors === 3)) board[i][j] += 2
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0 || board[i][j] === 1) board[i][j] = 0;
            else board[i][j] = 1;
        }
    }
};