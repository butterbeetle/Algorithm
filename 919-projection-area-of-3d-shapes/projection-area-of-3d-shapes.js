/** 00:15:11
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
    // 배열 요소 개수
    // 열 최대값
    // 행 최대값

    const n = grid.length;

    let a = 0;
    let b = 0;
    let c = 0;

    for (let row = 0; row < n; row++) {
        let bMax = 0;
        let cMax = 0;

        for (let col = 0; col < n; col++) {
            if (grid[row][col]) a += 1;
            bMax = Math.max(bMax, grid[row][col])
            cMax = Math.max(cMax, grid[col][row])
        }

        b += bMax;
        c += cMax;

    }

    return a + b + c
};