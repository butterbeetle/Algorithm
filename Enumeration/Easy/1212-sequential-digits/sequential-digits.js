/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    const output = []
    const string = "123456789"

    const low_len = low.toString().length;
    const high_len = high.toString().length;

    for(let i=low_len; i<=high_len; i++){
        for(let j=0; j<=(string.length-i); j++){
            const num = +string.substring(j,j+i)
            if(low <= num && num <= high) output.push(num)
        }
    }

    return output
};