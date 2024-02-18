/** 00:04:58
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map();
 
    for(let i=0; i<s.length; i++){
        map.set(s[i], (map.get(s[i])||0)+1)
    }
    
    for(const [k,v] of map){
        if(v === 1) return s.indexOf(k)
    }

    return -1
};