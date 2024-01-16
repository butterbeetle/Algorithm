/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunkArray = [];
    
    let i=0;

    while(i < arr.length){
        chunkArray.push(arr.splice(0,size))
    }

    return chunkArray;
};
