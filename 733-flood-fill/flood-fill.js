/** 00:05:39
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const rows = image.length;
    const cols = image[0].length;
    const defaultColor = image[sr][sc]

    const dfs = (row, col) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols || image[row][col] !== defaultColor || image[row][col] === color) return;

        image[row][col] = color;

        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    }

    dfs(sr, sc)

    return image
};