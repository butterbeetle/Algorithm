/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set()
    
    const re = (n) => {
        if(n == 1) return true;
        if(set.has(n)) return false;

        let sum = 0;
        set.add(n)

        for(const num of n.toString().split("")){
            sum += (num**2)
        }

        return re(sum)
    }

    return re(n)
};