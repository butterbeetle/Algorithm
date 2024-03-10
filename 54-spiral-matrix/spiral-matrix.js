/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const output = [];
    let m = -1;
    let row = matrix.length-1;

    let n = 0;
    let col = matrix[0].length;

    let inc = 1;

    while(1){
        for(let i=0; i<col; i++){
            m+=inc;
            output.push(matrix[n][m])
        }
        col--;
        if(col<0) break;

        for(let i=0; i<row; i++){
            n+=inc;
            output.push(matrix[n][m])
        }
        row--;
        if(row<0) break;

        inc *= -1;
    }

    return output
};