/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let output = 0;
    const map = new Map();

    for(const c of s){
        map.set(c, (map.get(c)||0)+1)
        
        if(map.get("L") === map.get("R")){
            output++
        }
    }

    return output
};