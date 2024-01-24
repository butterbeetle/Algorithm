/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length < 3) return false; 
    let step = 0;

    while(step < arr.length && arr[step] < arr[step+1]) step++;
    if(!step || step === arr.length-1) return false
    while(step < arr.length && arr[step] > arr[step+1]) step++;
    
    return step === arr.length-1
};