/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (str) {
    let output = 0;
    const stack = [];

    for (const s of str) {
        if (s === "(") stack.push(s)
        else if (s === ")") stack.pop();

        output = Math.max(output, stack.length);
    }

    return output;
};