/** 00:11:52
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
    const n = 8;

    const kingRow = king[0];
    const kingCol = king[1];

    let output = []

    const found = (row, col, rowInc, colInc) => {
        if (row < 0 || col < 0 || row >= n || col >= n) return;

        for (let i = 0; i < queens.length; i++) {
            const [qRow, qCol] = queens[i];
            if (row === qRow && col === qCol) {
                output.push(queens[i])
                return;
            }
        }

        found(row + rowInc, col + colInc, rowInc, colInc)
    }

    found(kingRow - 1, kingCol - 1, -1, -1)
    found(kingRow - 1, kingCol, -1, 0)
    found(kingRow - 1, kingCol + 1, -1, 1)


    found(kingRow, kingCol - 1, 0, -1)
    found(kingRow, kingCol + 1, 0, 1)


    found(kingRow + 1, kingCol - 1, 1, -1)
    found(kingRow + 1, kingCol, 1, 0)
    found(kingRow + 1, kingCol + 1, 1, 1)

    return output
};