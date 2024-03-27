/** 00:11:52
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
    const n = 8;
    const directions = [
        [-1, 0],   // Up
        [1, 0],    // Down
        [0, -1],   // Left
        [0, 1],    // Right
        [-1, -1],  // Up Left
        [-1, 1],   // Up Right
        [1, -1],   // Down Left
        [1, 1]     // Down Right
    ];

    let output = []

    const found = (row, col, dx, dy) => {
        if (row < 0 || col < 0 || row >= n || col >= n) return;

        if (queens.some(([qx, qy]) => qx === row && qy === col)) {
            output.push([row, col])
            return;
        }

        found(row + dx, col + dy, dx, dy)
    }

    for (const [dx, dy] of directions) {
        let row = king[0] + dx;
        let col = king[1] + dy;
        found(row, col, dx, dy)
    }

    return output
};