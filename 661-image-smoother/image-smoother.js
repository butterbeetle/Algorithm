/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
    const rows = img.length;
    const cols = img[0].length;
    const output = Array.from({ length: rows }, () => new Array(cols).fill(0))

    const smoother = (row, col) => {
        let sum = 0;
        let cnt = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const x = row + i;
                const y = col + j;
                if (x < 0 || y < 0 || x >= rows || y >= cols) continue;
                sum += img[x][y]
                cnt++;
            }
        }

        return Math.floor(sum / cnt)
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            output[row][col] = smoother(row, col);
        }
    }

    return output
};