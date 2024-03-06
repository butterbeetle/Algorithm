/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    const m = mat[0].length;
    const n = mat.length;
    
    const t = (i,j) => {
        const arr = [];
        let row = i;
        let col = j;

        while(mat[row] && mat[row][col]){
            arr.push(mat[row][col]);
            row++;
            col++;
        }

        arr.sort((a,b)=>a-b)

        while(arr.length){
            --row;
            --col;
            mat[row][col] = arr.pop()
        }
    }

    for(let col=0; col<m; col++){
        t(0,col);
    }
    for(let row=0; row<n; row++){
        t(row,0);
    }

    return mat
}