/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const arr = Array.from({length:matrix.length},()=>[])
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix.length; j++){
            if(!i) arr[i][j] = matrix[i][j]
            else if(!j){
                arr[i][j] = matrix[i][j]+ Math.min(arr[i-1][j], arr[i-1][j+1])
            }else if(j===matrix.length-1){
                arr[i][j] = matrix[i][j]+ Math.min(arr[i-1][j], arr[i-1][j-1])
            }else{           
                arr[i][j] = matrix[i][j]+ Math.min(arr[i-1][j-1],arr[i-1][j], arr[i-1][j+1])
            }
        }
    }
    return Math.min(...arr[arr.length-1])
};