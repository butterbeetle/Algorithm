/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (str) {
    const stack = [];
    const arr = str.split("")

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "(") stack.push(i)
        else if (arr[i] === ")") {
            if (stack.length) stack.pop();
            else arr[i] = ""
        }
    }

    for (const i of stack) {
        arr[i] = "";
    }

    return arr.join("")
};