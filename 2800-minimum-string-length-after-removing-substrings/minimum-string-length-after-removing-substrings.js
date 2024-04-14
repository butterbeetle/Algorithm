/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    let output = 0;
    const stack = [];

    for (const c of s) {
        console.log(`${c} -----------------------`)
        if (stack[stack.length - 1] + c === "AB" || stack[stack.length - 1] + c === "CD") stack.pop();
        else stack.push(c);
    }

    return stack.length;
};