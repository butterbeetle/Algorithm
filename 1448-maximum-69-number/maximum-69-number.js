/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const arr = num.toString().split("")
    let chance = true;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 6 && chance) {
            arr[i] = 9;
            chance = false;
        }
        if(!chance) break;
    }
    return arr.join("")
};