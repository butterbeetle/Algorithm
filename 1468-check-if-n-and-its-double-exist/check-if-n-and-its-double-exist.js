/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    return arr.map(v=>v*2).some((d,i)=>{
        const idx = arr.indexOf(d)
        if(idx > -1 && idx !== i) return true
        return false
    })
};