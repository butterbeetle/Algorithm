/** 00:21:19
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
    let output = 0;

    const isPrime = (n) => {
        if(n<2) return false

        for(let i=2; i<=Math.sqrt(n); i++){
            if (!(n%i)) return false
        }

        return true
    }

    for(let i=0, j=nums.length-1; i<nums.length; i++, j--){
        if(isPrime(nums[i][i])) output = Math.max(output, nums[i][i])
        if(isPrime(nums[i][j])) output = Math.max(output, nums[i][j])
    }

    return output
};