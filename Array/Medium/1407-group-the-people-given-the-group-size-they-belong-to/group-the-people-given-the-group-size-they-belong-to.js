/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    const output = [];
    const map = {};

    for (const i in groupSizes) {
        const size = groupSizes[i]
        if (!map[size]) map[size] = [];
        map[size].push(i)
        
        if (map[size].length === size) {
            output.push(map[size]);
            delete map[size]
        }
    }

    return output
};
// var groupThePeople = function (groupSizes) {
//     const output = [];
//     const map = new Map();

//     for (const i in groupSizes) {
//         const arr = map.get(groupSizes[i]) || [];
//         map.set(groupSizes[i], [...arr, i])
//     }

//     for (const [k, v] of map) {
//         while (v.length) {
//             const tmp = [];
//             for (let i = 0; i < k; i++) {
//                 tmp.push(v.pop())
//             }
//             output.push(tmp)
//         }
//     }

//     return output
// };