/** 00:23:02
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    const makeZero = (row, col, direction) => {
        if (row < 0 || col < 0 ||
            row >= rows || col >= cols || matrix[row][col] === "Z") return;

        matrix[row][col] = 0;

        if (direction === "UP") makeZero(row - 1, col, direction);
        else if (direction === "DOWN") makeZero(row + 1, col, direction);
        else if (direction === "LEFT") makeZero(row, col - 1, direction);
        else if (direction === "RIGHT") makeZero(row, col + 1, direction);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (!matrix[row][col]) matrix[row][col] = "Z"
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (matrix[row][col] === "Z") {
                makeZero(row - 1, col, "UP");
                makeZero(row + 1, col, "DOWN");
                makeZero(row, col - 1, "LEFT");
                makeZero(row, col + 1, "RIGHT");
                matrix[row][col] = 0;
            }
        }
    }
};