/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    const output = []
    const string = "123456789"

    const low_str = low.toString()
    const low_len = low_str.length;
    const high_str = high.toString()
    const high_len = high_str.length;

    for(let i=low_len; i<=high_len; i++){
        for(let j=0; j<=(string.length-i); j++){
            const num = +string.substring(j,j+i)
            if(low <= num && num <= high) output.push(num)
        }
    }

    return output
};