/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    
    const map1 = new Map();
    const map2 = new Map();

    for(let i=0; i<s.length; i++){
        map1.set(s[i], (map1.get(s[i])||0)+1)
        map2.set(t[i], (map2.get(t[i])||0)+1)
    }

    console.log(map1, map2)

    for(const [key,value] of map1){
        if(map2.get(key) !== value) return false
    }

    return true
};