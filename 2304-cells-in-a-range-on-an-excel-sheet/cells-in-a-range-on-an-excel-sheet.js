/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    const [start ,end] = s.split(":")
    const arr = [];

    for(let i=start[0].charCodeAt(); i<=end[0].charCodeAt(); i++){
        for(let j=start[1]; j<=end[1]; j++){
            arr.push(String.fromCharCode(i)+j)
        }
    }

    return arr
};