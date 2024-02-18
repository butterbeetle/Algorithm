/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map = new Map();

    for(const c of s){
        map.set(c, (map.get(c)||0)+1)
    }

    return [...map].sort((a,b)=>b[1]-a[1]).map(([k,v])=> k.repeat(v)).join("")
};