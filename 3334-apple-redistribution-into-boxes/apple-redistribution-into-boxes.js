/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
    const total = apple.reduce((acc, cur) => acc + cur, 0);
    capacity.sort((a, b) => b - a);
    
    let box = 0;
    let output = 0;

    for (const b of capacity) {
        box += b;
        output += 1;
        if (box >= total) break;
    }

    return output
};