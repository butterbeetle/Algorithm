/** 00:02:35
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0;
    let pro = 1;
    const str = n.toString();

    for(let i=0; i<str.length; i++){
        sum += +str[i]
        pro *= +str[i]
    }

    return pro - sum
};