/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(f, n) {
    if(!n) return true
    for(let i=0; i<f.length; i++){
        const prev = i > 0 ? f[i-1] : 0
        const next = i < f.length-1 ? f[i+1] : 0
        if(!prev && !next && f[i] != 1){
            f[i] = 1;
            n--;
        }
    }

    return n <= 0
};