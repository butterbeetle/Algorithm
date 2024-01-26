/** 00:10:00
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    const map = new Map();
    let prevLeaverTime = 0;

    for(const [id, leaverTime] of logs){
        const wordTime = leaverTime-prevLeaverTime
        map.set(id, map.get(id) > wordTime ? map.get(id) : wordTime)
        prevLeaverTime = leaverTime;
    }
    
    const sortedMap = [...map].sort((a,b)=>b[1]-a[1]||a[0]-b[0])
    
    return sortedMap[0][0]
};