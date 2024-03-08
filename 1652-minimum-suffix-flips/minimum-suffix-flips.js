/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
    let output = 0;
    let s = "0".repeat(target.length);
    
    for(let i=0; i<target.length; i++){
        if(target[i] !== s[i] && s[i] == 0){
            output++;
            s = s.substring(0,i) + "1".repeat(target.length-i);
        }else if(target[i] !== s[i] && s[i] == 1){
            output++;
            s = s.substring(0,i) + "0".repeat(target.length-i);
        }
    }

    return output;
};