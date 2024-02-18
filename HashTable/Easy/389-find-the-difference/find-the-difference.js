/** 00:02:53
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const m1 = new Map();
    const m2 = new Map();

    for(const v of s){
        m1.set(v, (m1.get(v)||0)+1)
    }

    for(const v of t){
        m2.set(v, (m2.get(v)||0)+1)
    }

    for(const [k,v] of m2){
        const m1_v = m1.get(k)
        if(v !== m1_v) return k
    }
};