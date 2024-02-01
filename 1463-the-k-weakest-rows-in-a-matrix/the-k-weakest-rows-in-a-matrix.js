/** 00:06:54
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const map = new Map();

    for(const i in mat){
        for(const m of mat[i]){
            map.set(+i, (map.get(+i)||0)+m)
        }
    }

    return new Array(...map).sort((a,b)=>a[1]-b[1]||a[0]-b[0]).map(v=>v[0]).slice(0,k)
};