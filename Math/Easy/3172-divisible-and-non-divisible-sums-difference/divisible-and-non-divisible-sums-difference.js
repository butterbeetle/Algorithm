/** 00:04:54
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    const [nd,d] = Array.from({length:n},(_,i)=>i+1).reduce(([nd,d],cur)=>{
        if(cur%m) return [nd+cur,d]
        else return [nd,d+cur]
    },[0,0])

    return nd - d 
};