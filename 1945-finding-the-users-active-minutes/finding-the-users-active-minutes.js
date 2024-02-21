/** 00:10:32
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
    let output = new Array(k).fill(0)
    const idMap = new Map();

    for (const [id, time] of logs) {
        const arr = (idMap.get(id) ?? []).concat([time])
        idMap.set(id, arr)
    }

    for (const v of idMap.values()) {
        const size = new Set(v).size - 1
        output[size]++;
    }


    return output
};