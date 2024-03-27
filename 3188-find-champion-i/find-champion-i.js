/** 00:02:32
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid) {
    let output = [0, 0];
    const n = grid.length;

    for (let row = 0; row < n; row++) {
        let cnt = 0;
        for (let col = 0; col < n; col++) {
            if (grid[row][col]) cnt++;
        }

        if (cnt > output[1]) {
            output = [row, cnt]
        }
    }

    return output[0]
};