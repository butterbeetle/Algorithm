/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    const stack = [];
    for (let c of s) {
        if (stack.length && Math.abs(stack[stack.length - 1].charCodeAt() - c.charCodeAt()) == 32) {
            stack.pop();
        } else stack.push(c);

    }
    return stack.join("");
};