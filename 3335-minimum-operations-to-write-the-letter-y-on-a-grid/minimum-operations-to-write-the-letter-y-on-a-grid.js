/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperationsToWriteY = function (grid) {
    const n = grid.length;
    const standard = Math.floor(n / 2)

    const isY = [0, 0, 0];
    const isNotY = [0, 0, 0];

    const thisIsY = (row, col) => {
        const left = row < standard && col < standard && row === col;
        const right = row < standard && col > standard && row === (n - (col + 1));
        const middle = col === standard && row >= standard;

        return left || right || middle;
    }

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (thisIsY(row, col)) isY[grid[row][col]]++;
            else isNotY[grid[row][col]]++;
        }
    }

    return Math.min(
        isY[1] + isY[2] + (isNotY[0] + Math.min(isNotY[1], isNotY[2])), // Y = 0
        isY[0] + isY[2] + (isNotY[1] + Math.min(isNotY[0], isNotY[2])), // Y = 1
        isY[0] + isY[1] + (isNotY[2] + Math.min(isNotY[0], isNotY[1]))  // Y = 2
    )
};
// 0 1 2
// ------
// 2 2 3    Y
// 3 4 11   Not

// Y를 0으로 채울꺼면
// Y[1] + Y[2] + NotY[0] + Math.min(NotY[1], NotY[2])