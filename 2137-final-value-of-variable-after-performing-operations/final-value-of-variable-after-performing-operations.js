/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(op) {
    let n = 0;
    
    for(let i=0; i<op.length; i++){
        if(op[i].includes("+")) n++;
        else n--;
    }

    return n
};