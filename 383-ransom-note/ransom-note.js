/** 00:04:04
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(r, m) {
    const m1 = new Map();
    const m2 = new Map();

    for(let i=0; i<r.length; i++){
        m1.set(r[i],(m1.get(r[i])||0)+1)
    }

    for(let i=0; i<m.length; i++){
        m2.set(m[i],(m2.get(m[i])||0)+1)
    }
    
    for(const [key, value] of m1){
        const m2_value = m2.get(key)
        if(m2_value < value || m2_value === undefined) return false
    }
    
    return true
};