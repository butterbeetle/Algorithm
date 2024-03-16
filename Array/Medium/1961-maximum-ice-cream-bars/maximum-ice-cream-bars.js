/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    let output = 0;
    const max = Math.max(...costs) + 1
    const count_arr = new Array(max).fill(0);
    const sorted_arr = [];

    for (const cost of costs) {
        count_arr[cost]++;
    }
    // console.log(count_arr);

    for (let i = 0; i < count_arr.length; i++) {
        count_arr[i] += count_arr[i - 1] ?? 0
    }
    // console.log(count_arr);

    for (let i = costs.length - 1; i >= 0; i--) {
        sorted_arr[count_arr[costs[i]]--] = costs[i];
    }
    sorted_arr.shift();
    // console.log(sorted_arr)

    for (const num of sorted_arr) {
        if (num <= coins) {
            coins -= num;
            output++;
        } else break;
    }

    return output
};
// var maxIceCream = function (costs, coins) {
//     costs.sort((a, b) => a - b)
//     let output = 0;

//     for (const cost of costs) {
//         if (cost <= coins) {
//             coins -= cost;
//             output++;
//         } else break;
//     }

//     return output
// };