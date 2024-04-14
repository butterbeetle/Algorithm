/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    const stack = [];

    for (const ops of operations) {
        if (ops === "C") {
            stack.pop();
        } else if (ops === "D") {
            stack.push(stack[stack.length - 1] * 2);
        } else if (ops === "+") {
            stack.push(+stack[stack.length - 1] + +stack[stack.length - 2])
        } else {
            stack.push(ops);
        }
    }

    return stack.reduce((acc, cur) => acc + +cur, 0)
};