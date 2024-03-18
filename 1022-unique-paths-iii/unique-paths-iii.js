/** 1:14:58
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
    let output = 0;
    let walk = 0;

    const m = grid.length;
    const n = grid[0].length;
    const start = [];
    const end = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) start.push(i, j)
            else if (grid[i][j] === 2) end.push(i, j)
            else if (grid[i][j] === 0) walk++;
        }
    }

    // walk + s + e
    walk += 2;

    const move = ([row, col], walk) => {
        if (row < 0 || col < 0 ||
            row >= m || col >= n ||
            grid[row][col] === -1) return;

        if (row === end[0] && col === end[1]) {
            if (walk === 0) output++;
            return
        }

        const tmp = grid[row][col]
        grid[row][col] = -1;

        move([row + 1, col], walk - 1)
        move([row - 1, col], walk - 1)
        move([row, col + 1], walk - 1)
        move([row, col - 1], walk - 1)

        grid[row][col] = tmp;

        return;
    }

    move(start, walk - 1);

    return output;
};