/** 00:10:19
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let max = 0;
    let output = 0;
    
    for(const i in dimensions){
        const [len, wid] = dimensions[i]
        const Diagonal = Math.sqrt((len**2)+(wid**2))
        if(max < Diagonal){
            max = Diagonal;
            output = (len * wid);
        }else if(max === Diagonal){
            output = output < (len*wid) ? (len*wid) : output
        }
    }

    return output
};