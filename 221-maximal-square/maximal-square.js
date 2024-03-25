/** 00:51:35
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let output = 0;
    const rows = matrix.length;
    const cols = matrix[0].length;

    const arr = Array.from({ length: rows }, () => new Array(cols).fill(0));

    for (let col = 0; col < cols; col++) {
        if(matrix[0][col] == 1) output = 1;
        arr[0][col] = +matrix[0][col]
    }
    for (let row = 0; row < rows; row++) {
        if(matrix[row][0] == 1) output = 1;
        arr[row][0] = +matrix[row][0]
    }
    
    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            if (matrix[row][col] == 1) {
                arr[row][col] = +matrix[row][col]
                    + Math.min(arr[row - 1][col - 1], arr[row - 1][col], arr[row][col - 1])
                output = Math.max(output, arr[row][col])
            }
        }
    }

    return output ** 2
};