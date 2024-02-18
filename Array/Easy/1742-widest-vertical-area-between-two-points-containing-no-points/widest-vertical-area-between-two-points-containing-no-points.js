/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    const arr = points.sort((a,b)=>a[0]-b[0]).map(n=>n[0]);
    let area = 0;

    for(let i=0; i<arr.length-1; i++){
        if(arr[i+1] - arr[i] > area ) {
            area = arr[i+1] - arr[i]
        }
    }

    return area
};