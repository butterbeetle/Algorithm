/** 01:56:23
 * @param {number[]} temperatures
 * @return {number[]}
 */
// [34,36,38,31,32]
var dailyTemperatures = function (temperatures) {
    const stack = [];
    const output = new Array(temperatures.length).fill(0)

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const idx = stack.pop();
            output[idx] = i - idx;
        }
        stack.push(i);
    }

    return output;
}