/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = []
    let output = 0;
    console.log(Math.floor)
    for (const token of tokens) {
        if (token === "+") {
            const rightToken = stack.pop();
            const leftToken = stack.pop();
            console.log(leftToken, "+", rightToken)
            output = leftToken + rightToken
            stack.push(output)
        } else if (token === "-") {
            const rightToken = stack.pop();
            const leftToken = stack.pop();
            console.log(leftToken, "-", rightToken)
            output = leftToken - rightToken
            stack.push(output)
        } else if (token === "*") {
            const rightToken = stack.pop();
            const leftToken = stack.pop();
            console.log(leftToken, "*", rightToken)
            output = leftToken * rightToken
            stack.push(output)
        } else if (token === "/") {
            const rightToken = stack.pop();
            const leftToken = stack.pop();
            console.log(leftToken, "/", rightToken)
            output = leftToken / rightToken
            stack.push(output < 0 ? Math.ceil(output) : Math.floor(output))
        } else {
            stack.push(parseInt(token))
        }
        console.log(stack.length, output)
    }
    if(stack.length === 1) output = stack.pop()
    return output
};