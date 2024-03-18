/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let output = 0;
    points.sort((a,b)=>a[1]-b[1])
    let prevS = points[0][0]
    let prevE = points[0][1]

    for(let i=1; i<points.length; i++){
        let [s,e] = points[i];
        console.log(prevS, prevE)
        if(prevS <= s) prevS = s;
        if(e <= prevE) prevE = e;

        if(prevE < s){ 
            output++;
            prevS = s;
            prevE = e;
        }
    }

    return output+1
};