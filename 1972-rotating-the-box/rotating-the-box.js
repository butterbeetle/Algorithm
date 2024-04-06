/** 01:16:44
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
    const rows = box.length;
    const cols = box[0].length;
    const grid = Array.from({ length: cols }, () => new Array(rows).fill(Infinity))

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            grid[col][row] = box[row][col];
        }
    }

    for (let row = 0; row < cols; row++) {
        grid[row].reverse()
    }

    for (let row = 0; row < rows; row++) {
        const queue = [];
        for (let col = cols - 1; col >= 0; col--) {
            if (grid[col][row] === "*") queue.length = 0;
            else if (grid[col][row] === ".") queue.push(col);
            else if (queue.length && grid[col][row] === "#") {
                const idx = queue.shift();
                [grid[col][row], grid[idx][row]] = [grid[idx][row], grid[col][row]];
                queue.push(col);
            }
        }
    }

    return grid
};