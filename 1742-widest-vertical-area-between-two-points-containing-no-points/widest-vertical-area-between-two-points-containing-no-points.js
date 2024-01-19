/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    const arr = points.sort((a,b)=>a[0]-b[0]).map(n=>n[0]);
    let p = arr[0];
    let area = 0;

    for(let i=1; i<arr.length; i++){
        let tmp = 0;
        if(p < arr[i]) {
            tmp = arr[i] - p
            area = tmp > area ? tmp : area
            p = arr[i]
        }
    }

    return area
};