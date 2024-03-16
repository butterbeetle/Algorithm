/** 00:10:32
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
    let output = new Array(k).fill(0)
    const map = new Map();

    for (const [id, time] of logs) {
        if (!map.has(id)) map.set(id, new Set())
        map.set(id, map.get(id).add(time))
    }

    for (const v of map.values()) {
        output[v.size - 1]++;
    }


    return output
};